/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SignInTypes } from './Actions'

export const loginUserLoading = (state) => ({
  ...state,
  loginLoading: true,
  loginErrorMessage: null,
});

export const loginUserSuccess = (state, { tokens }) => ({
  ...state,
  tokens: tokens,
  loginLoading: false,
  loginErrorMessage: null,
});

export const loginUserFailure = (state, { errorMessage }) => ({
  ...state,
  tokens: {},
  loginLoading: false,
  loginErrorMessage: errorMessage,
});
export const clearErrorMessage = (state) =>({
  ...state,
  loginErrorMessage: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [SignInTypes.LOGIN_USER_LOADING]: loginUserLoading,
  [SignInTypes.LOGIN_USER_SUCCESS]: loginUserSuccess,
  [SignInTypes.LOGIN_USER_FAILURE]: loginUserFailure,
  [SignInTypes.CLEAR_ERROR_MESSAGE]: clearErrorMessage,

});
