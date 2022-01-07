import { AxiosRequestConfig } from 'axios'
import { RequestInit, RequestInfo } from 'node-fetch'
import { colors } from './colors'

const fetch = (url: RequestInfo, init?: RequestInit) =>
  import('node-fetch').then((res) => res.default(url, init))

const axios = (config: AxiosRequestConfig) =>
  import('axios').then((res) => res.default(config))

export { fetch, axios, colors }
