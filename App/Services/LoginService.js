import axios from 'axios'
import { Config } from 'App/Config'

import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number)
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});
const in200s = isWithin(200, 299);

const userApiClient = axios.create({
    /**
     * Import the config from the App/Config/index.js file
     */
    baseURL: Config.SWIVER_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 3000,
});

function loginUser(credentials) {


    return userApiClient.post('/login',{
        email : credentials.username,
        password : credentials.password,
    }).then((response) => {
        if (in200s(response.status)) {
            return response.data
        }

        return null
    })
   return null;
}

export const loginService = {
    loginUser
};
