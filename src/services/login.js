import axios from 'axios'
const baseUrl = 'api/login'

const login = async (credentials) => {
  const { data: user } = await axios.post(baseUrl, credentials)
  return user
}

export default {
  login,
}
