import axios from 'axios'

export const POST_API_URL = 'https://api.thecatapi.com'

export const POST_API = axios.create({
    baseURL: POST_API_URL
})