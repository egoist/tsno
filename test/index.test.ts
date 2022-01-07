import path from 'path'
import { execa } from 'execa'
import { test, expect } from 'vitest'

function fixture(...args: string[]) {
  return path.join(__dirname, 'fixtures', ...args)
}

const cli = path.join(__dirname, '../dist/cli.js')

test('simple', async () => {
  const res = await execa('node', [cli, 'run', fixture('simple.ts')])
  expect(res.stdout).toContain('foo')
})

test('script args', async () => {
  const res = await execa('node', [
    cli,
    'run',
    fixture('script-args.ts'),
    'a',
    '--foo',
    'b',
    '--bar',
    'c',
    '--baz',
    '3',
  ])
  expect(res.stdout).toMatchInlineSnapshot(`
"[
  'a', '--foo',
  'b', '--bar',
  'c', '--baz',
  '3'
]"`)
})

test('import esm package', async () => {
  const res = await execa('node', [
    cli,
    'run',
    fixture('import-esm-package/index.ts'),
  ])
  expect(res.stdout).toMatchInlineSnapshot(`"foo"`)
})
