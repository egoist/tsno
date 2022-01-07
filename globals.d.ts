import {
  fetch as _fetch,
  axios as _axios,
  colors as _colors,
} from './dist/client'

declare global {
  const fetch: typeof _fetch
  const axios: typeof _axios
  const colors: typeof _colors
}
