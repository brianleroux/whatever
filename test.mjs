import test from 'tape'
import getFiles from './index.mjs'

test('files', async t => {
  t.plan(1)
  let basePath = process.cwd()
  let folder = 'some'
  let result = await getFiles(basePath, folder)
  t.ok(result.length == 1, 'got one file')
  console.log(result)
})
