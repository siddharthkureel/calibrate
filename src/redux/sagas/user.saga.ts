import { takeEvery, put, call } from 'redux-saga/effects';

import { USER_SIGNIN, USER_SIGNOUT, GET_USER } from 'src/constants';
import { firebase, onAuthStateChanged  } from 'src/firebase';
import { userActions } from 'src/redux/actions';

const { userSignSuccess, userSignInFailure } = userActions;

function* userSignIn (action: any) {
    try {
        const { email, password } =  action.payload;
        const { user } = yield call([firebase.auth(),firebase.auth().signInWithEmailAndPassword], email, password)
        yield put(userSignSuccess(user))
    } catch (error) {
        yield put(userSignInFailure(error))
    }
}

function* userSignOut () {
    yield call([firebase.auth(), firebase.auth().signOut])
}

function* getUser () {
    try {
        const user = yield call(onAuthStateChanged);
        yield put(userSignSuccess(user))
    } catch (error) {
        yield put(userSignInFailure(error))
    }
}

export function* watchUserSignIn () { yield takeEvery(USER_SIGNIN, userSignIn) }
export function* watchUserSignOut () { yield takeEvery(USER_SIGNOUT, userSignOut) }
export function* watchGetUser () { yield takeEvery(GET_USER, getUser) }