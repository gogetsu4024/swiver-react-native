/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ClientsTypes } from './Actions'

export const clientsFetchLoading = (state) => ({
  ...state,
  clientsLoading: true,
  clientsErrorMessage: null,
});

export const clientsFetchSuccess = (state, { clients }) => ({
  ...state,
  clients: clients,
  clientsLoading: false,
  clientsErrorMessage: null,
});

export const clientsFetchFailure = (state, { errorMessage }) => ({
  ...state,
  tokens: {},
  clientsLoading: false,
  clientsErrorMessage: errorMessage,
});

export const reducer = createReducer(INITIAL_STATE, {
  [ClientsTypes.CLIENTS_FETCH_LOADING]: clientsFetchLoading,
  [ClientsTypes.CLIENTS_FETCH_SUCCESS]: clientsFetchSuccess,
  [ClientsTypes.CLIENTS_FETCH_FAILURE]: clientsFetchFailure,

});
