**💛 You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/egoist).**

---

# tsno

[![npm version](https://badgen.net/npm/v/tsno)](https://npm.im/tsno)

## Features

- TypeScript support
- Deno-style URL import, try `npx tsno https://egoist.sh/tsno.ts`

## Install

```bash
npm i tsno -D
# Or install globally
npm i tsno -g
```

## Usage

```bash
tsno script.ts
```

Supported files: `.js` `.jsx` `.ts` `.tsx` `.cjs` `.mjs` `.json`

All `node` flags are forwarded, i.e. `tsno script.ts --experimental-wasm-modules` works as expected.

### Importing from URL

tsno supports deno-style http import, try:

```bash
tsno https://egoist.sh/tsno.ts
```

You can also use `import` or `require` to load modules from an URL.

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
