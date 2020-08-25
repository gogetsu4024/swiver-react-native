import { put, call } from 'redux-saga/effects'
import  ClientsTypes from 'App/Stores/Clients/Actions'
import { ClientsService } from 'App/Services/ClientsService'



export function* fetchClientsInformation(action) {

    yield put(ClientsTypes.clientsFetchLoading());

    const response = yield call(ClientsService.fetchClientsInformation,action.params);
    if (response) {
        yield put(ClientsTypes.clientsFetchSuccess(response))
    } else {
        yield put(
            ClientsTypes.clientsFetchFailure(response.message)
        )
    }

}
