import axios from 'axios'

export const POST_API_URL = 'https://api.thecatapi.com/v1/images/'

const API_KEY =
  'live_YDUw1b9NTxilQAduzabOGsRkvueHkHHQRvACdntEf9L1iQ88ltPdpTsDtXmYP6Wc'

export const POST_API = axios.create({
  baseURL: POST_API_URL,
})
