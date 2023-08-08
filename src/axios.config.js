import axios from 'axios'

const http = axios.create()

http.defaults.baseURL = 'https://super-shop-9f73b-default-rtdb.firebaseio.com'

export default http