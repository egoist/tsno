import { bundleRequire } from 'bundle-require'
import { spawn } from 'cross-spawn'

class PrettyError extends Error {}

const parseArgs = (args: string[]) => {
  const first = args[0]
  const showNodeHelp = args.includes('--help') || args.includes('-h')

  const file = first && first[0] !== '-' ? first : undefined

  return {
    file,
    showNodeHelp,
    args: file ? args.slice(1) : args,
  }
}

export async function startCLI() {
  try {
    const cli = parseArgs(process.argv.slice(2))

    if (cli.args.includes('--help') || cli.args.includes('-h')) {
      spawn('node', ['--help'], { stdio: 'inherit' })
      return
    }

    if (!cli.file) throw new PrettyError(`No file specified`)

    await bundleRequire({
      filepath: cli.file,
      require: (outfile) =>
        new Promise((resolve) => {
          const cmd = spawn('node', [outfile, ...cli.args], {
            stdio: 'inherit',
            env: process.env,
          })
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
