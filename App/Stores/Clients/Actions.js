import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({
  // Fetch user informations
  fetchClients: ['params'],
  // The operation has started and is loading
  clientsFetchLoading: null,
  // User informations were successfully fetched
  clientsFetchSuccess: ['clients'],
  // An error occurred
  clientsFetchFailure: ['errorMessage'],

});

export const ClientsTypes = Types
export default Creators
