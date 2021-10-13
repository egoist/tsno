import path from 'path'
import { bundleRequire } from 'bundle-require'
import { spawn } from 'cross-spawn'
import { httpPlugin } from './plugins/http-plugin'

const JS_EXT_RE = /\.(js|jsx|ts|tsx|mjs|cjs)$/
const URL_RE = /^https?:\/\//

class PrettyError extends Error {}

const parseArgs = (args: string[]) => {
  const scriptIndex = args.findIndex(
    (arg) => JS_EXT_RE.test(arg) || URL_RE.test(arg),
  )
  const script = scriptIndex === -1 ? undefined : args[scriptIndex]
  const showNodeHelp = args.includes('--help') || args.includes('-h')
  const nodeArgs = args.slice(0, scriptIndex)
  const scriptArgs = args.slice(scriptIndex + 1)

  return {
    script,
    showNodeHelp,
    nodeArgs,
    scriptArgs,
  }
}

export async function startCLI() {
  try {
    const cli = parseArgs(process.argv.slice(2))

    if (cli.showNodeHelp) {
      spawn('node', ['--help'], { stdio: 'inherit' })
      return
    }

    if (!cli.script) throw new PrettyError(`No file specified`)

    await bundleRequire({
      filepath: cli.script,
      esbuildOptions: {
        sourcemap: 'inline',
      },
      getOutputFile(filepath) {
        filepath = filepath.replace(/\.[a-z]+$/, '.tsno.cjs')
        // Prevent esbuild from emitting nested folders when the input is an URL
        if (/^https?:\/\//.test(filepath)) {
          filepath = filepath.replace(/\//g, '--')
        }
        return filepath
      },
      esbuildPlugins: [httpPlugin()],
      require: (outfile) =>
        new Promise((resolve) => {
          const cmd = spawn(
            'node',
            [
              '-r',
              path.join(__dirname, 'source-map-support-inject.js'),
              ...cli.nodeArgs,
              outfile,
              ...cli.scriptArgs,
            ],
            {
              stdio: 'inherit',
              env: process.env,
            },
          )
          cmd.stdout?.pipe(process.stdout)
          cmd.stderr?.pipe(process.stdout)
          cmd.stdin?.pipe(process.stdout)
          cmd.on('exit', resolve)
        }),
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
