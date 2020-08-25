import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as SignInReducer } from './SignIn/Reducers'
import { reducer as ClientsReducer } from './Clients/Reducers'
import NavigationService from "../Services/NavigationService";

export default () => {

  const appReducer = combineReducers({

    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    /* your app’s top-level reducers */
    user: UserReducer,
    signIn: SignInReducer,
    clients: ClientsReducer,
  });


  const rootReducer = (state, action) => {
    //in case of logout clear all users info
    if (action.type === 'USER_LOGGED_OUT') {
      state = undefined;
      NavigationService.navigateAndReset('SignIn')
    }

    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga)
}
