import { fork, all } from 'redux-saga/effects';
import * as clientSagas from './client.saga';
import * as userSagas from './user.saga';


export default function* root() {

  yield all([
    ...Object.values(clientSagas),
    ...Object.values(userSagas)
  ].map(fork))
}