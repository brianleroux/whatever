import glob from 'glob'
import { join } from 'path'


/** helper to return files from basePath */
export default function getFiles (basePath, folder) {
  let filesOnly = f => f.split(/\/|\\/).pop().includes('.')
  let expr = join(basePath, folder) + '/**'
  let raw = glob.sync(expr, { dot: false })
  let cache = raw.filter(filesOnly)
  let base = join(basePath, folder)
  let requestedFolder = f => f.startsWith(base)
  return cache.filter(requestedFolder)
}

