import path from 'path'
import { builtinModules } from 'module'
import { Plugin, Loader } from 'esbuild'

const URL_RE = /^https?:\/\//

function urlJoin(url: string, ...args: string[]) {
  const u = new URL(url)
  u.pathname = path.join(u.pathname, ...args)
  return u.toString()
}

export const httpPlugin = (): Plugin => {
  return {
    name: 'http',
    async setup(build) {
      const axios = await import('axios')

      // Intercept import paths starting with "http:" and "https:" so
      // esbuild doesn't attempt to map them to a file system location.
      // Tag them with the "http-url" namespace to associate them with
      // this plugin.
      build.onResolve({ filter: URL_RE }, (args) => ({
        path: args.path,
        namespace: 'http-url',
      }))

      // We also want to intercept all import paths inside downloaded
      // files and resolve them against the original URL. All of these
      // files will be in the "http-url" namespace. Make sure to keep
      // the newly resolved URL in the "http-url" namespace so imports
      // inside it will also be resolved as URLs recursively.
      build.onResolve({ filter: /.*/, namespace: 'http-url' }, (args) => {
        const isBuiltinModule = builtinModules.some(
          (name) => args.path === name || args.path.startsWith(`${name}/`),
        )
        if (isBuiltinModule) {
          return {
            path: args.path,
            external: true,
          }
        }
        if (!args.path.startsWith('.')) {
          return {
            path: `https://unpkg.com/${args.path}`,
            namespace: 'http-url',
          }
        }
        return {
          path: urlJoin(args.pluginData.url, '../', args.path),
          namespace: 'http-url',
        }
      })

      // When a URL is loaded, we want to actually download the content
      // from the internet. This has just enough logic to be able to
      // handle the example import from unpkg.com but in reality this
      // would probably need to be more complex.
      build.onLoad({ filter: /.*/, namespace: 'http-url' }, async (args) => {
        console.log(`Fetching`, args.path)
        const res = await axios.default({ url: args.path })
        const ext = path.extname(args.path)
        const loader =
          ext === '.mjs' || ext === '.cjs'
            ? 'js'
            : /\.[jt]sx?$/.test(ext)
            ? ext.slice(1)
            : 'js'
        return {
          contents: res.data,
          loader: loader as Loader,
          pluginData: {
            url: res.request.res.responseUrl,
          },
        }
      })
    },
  }
}
