import os from 'os'
import path from 'path'
import fs from 'fs'
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
  const evalIndex = args.findIndex((arg) => arg === '-e')
  const evalCode = evalIndex === -1 ? undefined : args[evalIndex + 1]
  const nodeArgs = args.slice(0, scriptIndex)
  const scriptArgs = args.slice(scriptIndex + 1)
  const showNodeHelp = nodeArgs.includes('--help') || nodeArgs.includes('-h')

  if (evalCode) {
    nodeArgs.splice(evalIndex, 2)
  }

  return {
    script,
    showNodeHelp,
    nodeArgs,
    scriptArgs,
    evalCode,
  }
}

const createTemplateScript = (code: string) => {
  const p = path.join(os.tmpdir(), `tsno-${Date.now()}.tsx`)
  fs.writeFileSync(p, code, 'utf8')
  return p
}

export async function startCLI() {
  try {
    const cli = parseArgs(process.argv.slice(2))

    if (cli.showNodeHelp) {
      spawn('node', ['--help'], { stdio: 'inherit' })
      return
    }

    if (!cli.script && !cli.evalCode) throw new PrettyError(`No file specified`)

    const filepath = cli.evalCode
      ? createTemplateScript(cli.evalCode)
      : cli.script!

    await bundleRequire({
      filepath,
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
            },
          )
          cmd.on('exit', (code) => {
            if (code != null) {
              process.exitCode = code
            }
            resolve(true)
          })
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
