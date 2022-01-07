import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['./src/cli.ts', './src/client.ts'],
    banner: {
      js: `import {createRequire as __$$createRequire} from 'module';var require=__$$createRequire(import\.meta.url);`,
    },
    format: ['esm'],
    clean: true,
    shims: false,
    target: 'node16',
    dts: {
      resolve: true,
      entry: ['./src/client.ts'],
    },
    esbuildOptions(options) {
      options.pure = ['__$$createRequire', 'createColors']
    },
    plugins: [
      {
        name: 'remove-empty-imports',
        renderChunk(code, info) {
          if (!info.path.endsWith('.js')) return

          return {
            code: code.replace(/^import\s+"[^"]+";/gm, (m) => {
              console.log('removed empty import:', m)
              return ''
            }),
          }
        },
      },
    ],
  },
])
