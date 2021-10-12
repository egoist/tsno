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
