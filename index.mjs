import glob from 'glob'
import { join } from 'path'


/** helper to return files from basePath */
export default function getFiles (basePath, folder) {
  let expr = folder + '/**'
  let raw = glob.sync(expr, { dot: false })
  return raw.filter(f => f.includes('.'))
}

