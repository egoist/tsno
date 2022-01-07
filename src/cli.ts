#!/usr/bin/env node
import { parse } from 'tinyargs'
import { bundleRequire } from 'bundle-require'
import { execa } from 'execa'
import path from 'path'
import { fileURLToPath } from 'url'
import stringArgv from 'string-argv'
import { version } from '../package.json'
import { httpPlugin } from './plugins/http-plugin'
import { getHelp } from './help'

class PrettyError extends Error {}

const dirname = path.dirname(fileURLToPath(import.meta.url))

async function startCLI() {
  try {
    const cli = parse(process.argv.slice(2), [
      { name: 'help', flags: ['h'], type: Boolean },
      { name: 'version', flags: ['v'], type: Boolean },
      {
        name: 'command',
        positional: true,
        type: String,
        optionalValue: true,
      },
      {
        name: 'inject',
        type: String,
        multiple: true,
      },
      {
        name: 'nodeFlags',
        flags: ['node-flags'],
        type: String,
      },
      {
        name: 'script',
        positional: true,
        type: String,
        stop: true,
        optionalValue: true,
      },
    ])

    if (cli.version) {
      return console.log(version)
    }

    if (!cli.command || cli.help) {
      return console.log(getHelp())
    }

    if (cli.command !== 'run') {
      throw new PrettyError(`Unknown command: ${cli.command}`)
    }

    if (!cli.script) {
      throw new PrettyError('Missing script')
    }

    const filepath = cli.script

    const inject: string[] = [
      path.join(dirname, 'client.js'),
      ...(cli.inject || []),
    ]

    await bundleRequire({
      filepath,
      esbuildOptions: {
        sourcemap: 'inline',
        inject,
        plugins: [httpPlugin()],
        target: `node${process.versions.node}`,
        banner: {
          js: `import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);`,
        },
      },
      getOutputFile(filepath, format) {
        filepath = filepath.replace(
          /\.[a-z]+$/,
          `.tsno${format == 'esm' ? '.mjs' : '.cjs'}`,
        )
        // Prevent esbuild from emitting nested folders when the input is an URL
        if (/^https?:\/\//.test(filepath)) {
          filepath = filepath.replace(/[\:\/]/g, '--')
        }
        return filepath
      },
      require: async (outfile) => {
        if (/^file:/.test(outfile)) {
          outfile = fileURLToPath(outfile)
        }
        await execa(
          'node',
          [
            '--enable-source-maps',
            ...(cli.nodeFlags ? stringArgv(cli.nodeFlags) : []),
            outfile,
            ...cli._,
          ],
          {
            stdio: 'inherit',
          },
        )
      },
    })
  } catch (error) {
    if (error instanceof PrettyError) {
      console.error(error.message)
    } else if (error instanceof Error) {
      console.error(error.stack)
    }
    process.exit(1)
  }
}

startCLI()
