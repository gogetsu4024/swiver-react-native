import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({
  // Fetch user informations
  loginUser: ['credentials'],
  // The operation has started and is loading
  loginUserLoading: null,
  // User informations were successfully fetched
  loginUserSuccess: ['tokens'],
  // An error occurred
  loginUserFailure: ['errorMessage'],

  clearErrorMessage: null,

});

export const SignInTypes = Types
export default Creators
