import { put, call } from 'redux-saga/effects'
import UserTypes from 'App/Stores/User/Actions'
import { userService } from 'App/Services/UserService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUserInformation(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html

    yield put(UserTypes.fetchUserInformationLoading())

    const response = yield call(userService.fetchUserInformation,action.token)
    if (response) {
        yield put(UserTypes.fetchUserInformationSuccess(response))
         NavigationService.navigateAndReset('StepsIndicator')
    } else {
        yield put(
            UserTypes.fetchUserInformationFailure(response.message)
        )
    }
  // Fetch user informations from an API
}
