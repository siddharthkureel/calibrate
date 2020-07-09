import { takeEvery, put, call, select } from 'redux-saga/effects';

import { clientActions } from '../actions/index';
import { getUserId } from '../selectors';
import { LOAD_CLIENTS, ADD_CLIENT } from 'src/constants';
import { firebaseClient, firebaseLooper } from 'src/firebase';

const { addClientSuccess, addClientFailure, loadClientsSuccess, loadClientsFailure } = clientActions;

function* loadClientSaga (action: any) {
   try {
      const uid = yield select(getUserId)
      const dataRef = yield call(() => firebaseClient(uid).once('value'))
      const dataArray: Array<object> = firebaseLooper(dataRef)
      yield put(loadClientsSuccess(dataArray))
   } catch (error) {
      
   }
}

function* addClientSaga (action: any) {
   try {
      const uid = yield select(getUserId)
      yield call(() => firebaseClient(uid).push(action.payload))
      yield put(addClientSuccess())
   } catch (error) {
      yield put(addClientFailure())
   }
}


export function* watchAddClient () { yield takeEvery(ADD_CLIENT, addClientSaga) } 
export function* watchLoadClient () { yield takeEvery(LOAD_CLIENTS, loadClientSaga) }
