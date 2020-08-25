import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { SignInTypes} from 'App/Stores/SignIn/Actions'
import { ClientsTypes} from 'App/Stores/Clients/Actions'


import { fetchUserInformation } from './User'
import { loginUser } from './SignIn'
import { fetchClientsInformation } from './Clients'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(UserTypes.FETCH_USER_INFORMATION, fetchUserInformation),


    takeLatest(SignInTypes.LOGIN_USER, loginUser),

    takeLatest(ClientsTypes.FETCH_CLIENTS, fetchClientsInformation),
  ])
}
