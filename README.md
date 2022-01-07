**💛 You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/egoist).**

---

# tsno

[![npm version](https://badgen.net/npm/v/tsno)](https://npm.im/tsno)

## Features

- Super duper fast
- TypeScript support
- Polyfills for common utilities like `fetch`, `axios` and `colors`
- Provide an easy way to run shell scripts
- Top-level await support (Node.js >= v14.8)
- Deno-style URL import, try `npx tsno run https://egoist.sh/tsno.ts` (experimental)

## Install

```bash
npm i tsno -D
# Or install globally
npm i tsno -g
```

## Usage

```bash
tsno run script.ts
```

Supported files: `.js` `.jsx` `.ts` `.tsx` `.cjs` `.mjs` `.json`

### Importing from URL

tsno supports deno-style http import, try:

```bash
tsno run https://egoist.sh/tsno.ts
```

You can also use `import` or `require` to load modules from an URL.

### Use with `google/zx`

Install `zx` alongside `tsno`:

```bash
npm i tsno zx -D
```

Then you can import `zx` in your script:

```ts
import { $ } from 'zx'

$`echo "some fancy shell script!"`
```

Now you can run `tsno run your-script.ts`.

## Sponsors

[![sponsors](https://sponsors-images.egoist.sh/sponsors.svg)](https://github.com/sponsors/egoist)

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
