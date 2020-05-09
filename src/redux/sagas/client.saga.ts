import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_CLIENTS, ADD_CLIENT } from 'src/constants';
import { firebaseDB } from 'src/firebase';

let userId: string | null = null;

function loadUserId(action: any){
    return userId = action.payload;
}

function* loadClientSaga (action: any) {
    const uid = yield action.payload;
 }

function addClientSaga (action: any) {
   const { uid, data } = action.payload
   return firebaseDB.ref('client/' + uid).push(data)
}

export function* watchAddClient () {
    yield takeEvery(ADD_CLIENT, addClientSaga)
}

export function* watchLoadClient () {
    yield takeEvery(LOAD_CLIENTS, loadClientSaga)
}

export function* watchUserId () {
    yield takeEvery('j', loadUserId)
}