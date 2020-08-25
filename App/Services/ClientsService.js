import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number);
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});
const in200s = isWithin(200, 299);

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
});

function fetchClientsInformation(params) {
    // Simulate an error 50% of the time just for testing purposes

    return userApiClient(params.tokens.token).get('secure/customers/?company='+params.currentCompany.id+'&offset=0&limit=10&sort=&sort-field=&type=&enabled=true&query=').then((response) => {
        if (in200s(response.status)) {
            console.log(response.data);
            return response.data
        }

        return null
    }).catch(function (error) {
        return error;
    })
}

export const ClientsService = {
    fetchClientsInformation,
};
