import { put, call } from 'redux-saga/effects'
import SignInActions from 'App/Stores/SignIn/Actions'
import UserTypes from 'App/Stores/User/Actions'
import { loginService } from 'App/Services/LoginService'
import NavigationService from 'App/Services/NavigationService'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */


export function* loginUser(action) {
    // Dispatch a redux action using `put()`
    // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
    yield put(SignInActions.loginUserLoading())

    // Fetch user informations from an API
    const response = yield call(loginService.loginUser,action.credentials)
    if (response.token) {
        yield put(SignInActions.loginUserSuccess(response))

        //fetch user information and companies
        yield put(UserTypes.fetchUserInformation(response.token))

    } else {
        yield put(
            SignInActions.loginUserFailure(response.message)
        )
    }
}
