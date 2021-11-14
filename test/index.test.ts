import path from 'path'
import execa from 'execa'

function fixture(...args: string[]) {
  return path.join(__dirname, 'fixtures', ...args)
}

test('simple', async () => {
  const res = await execa('node', [
    path.join(__dirname, '../cli.js'),
    fixture('simple.ts'),
  ])
  expect(res.stdout).toContain('foo')
})

test('script args', async () => {
  const res = await execa('node', [
    path.join(__dirname, '../cli.js'),
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
    ]"
  `)
})

test('import esm package', async () => {
  const res = await execa('node', [
    path.join(__dirname, '../cli.js'),
    fixture('import-esm-package/index.ts'),
  ])
  expect(res.stdout).toMatchInlineSnapshot(`"foo"`)
})
