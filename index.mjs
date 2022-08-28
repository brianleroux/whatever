import glob from 'glob'
import { join } from 'path'

let cache = false

/** helper to return files from basePath */
export default function getFiles (basePath, folder) {
  if (!cache) {
    let expr = join(basePath, folder,  '/**')
    let raw = glob.sync(expr, { dot: false })
    console.log({expr, raw})
    cache = raw.filter(f => f.includes('.'))
  }
  return cache
}

