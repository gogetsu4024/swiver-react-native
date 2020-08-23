import { put, call } from 'redux-saga/effects'
import SignInActions from 'App/Stores/SignIn/Actions'
import { loginService } from 'App/Services/LoginService'

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
    const tokens = yield call(loginService.loginUser,action.credentials)
    if (tokens) {
        yield put(SignInActions.loginUserSuccess(tokens))
    } else {
        yield put(
            ExampleActions.loginUserFailure('There was an error while loggin you in.')
        )
    }
}
