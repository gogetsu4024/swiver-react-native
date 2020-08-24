import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const userApiClient =(token) => axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.SWIVER_URL,
  headers: {
    authorization : 'Bearer '+token,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchUserInformation(token) {
  // Simulate an error 50% of the time just for testing purposes

  return userApiClient(token).get('/secure/me').then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  }).catch(function (error) {
    return error;
  })
}

export const userService = {
  fetchUserInformation,
}
