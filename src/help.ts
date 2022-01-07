import path from 'path'
import stripAnsi from 'strip-ansi'
import { colors } from './colors'

export const formatScriptLog = (
  pkg: { name: string; dir: string },
  text: string,
) => {
  let prefix = ''
  prefix += `${colors.cyan(pkg.name)} `
  const relativeDir = path.relative(process.cwd(), pkg.dir)
  prefix += `${relativeDir ? colors.dim(`${relativeDir} `) : ''}`
  return colors.bold(
    `${colors.bold(prefix)}${colors.magenta('$')} ${colors.dim(text)}`,
  )
}

const fillRight = (text: string, width: number) => {
  return text + ` `.repeat(width - stripAnsi(text).length)
}

export const arraify = <T>(value: T | T[]): T[] =>
  Array.isArray(value) ? value : [value]

export const helpTable = (array: [string, string[]][]) => {
  const longest = array.reduce((max, item) => {
    return item[0].length > max ? item[0].length : max
  }, 0)
  const width = longest + 4
  return array
    .map((item) => {
      return item[1]
        .map((line, i) => {
          if (i === 0) return fillRight(colors.bold(item[0]), width) + line
          return fillRight('', width) + line
        })
        .join('\n')
    })
    .join('\n')
}

export const getHelp = () => {
  return `
Usage:
    $ tsno run [...tsno_flags] [script] [...script_args]

Flags:
${helpTable([
  [`  -h, --help`, [`Show help message`]],
  [`  -v, --version`, [`Show version`]],
])}
`
}
