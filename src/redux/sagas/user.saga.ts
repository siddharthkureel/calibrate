import { takeEvery, put, call } from 'redux-saga/effects';

import { USER_SIGNIN, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNIN_FAILURE, GET_USER } from 'src/constants';
import { firebase, onAuthStateChanged  } from 'src/firebase';

function* userSignIn (action: any) {
    try {
        const { email, password } =  action.payload;
        const { user } = yield call([firebase.auth(),firebase.auth().signInWithEmailAndPassword], email, password)
        yield put({ type: USER_SIGNIN_SUCCESS, payload: user })
    } catch (error) {
        yield put({ type: USER_SIGNIN_FAILURE, payload: error })
    }
}

function* userSignOut () {
    yield call([firebase.auth(), firebase.auth().signOut])
}

function* getUser () {
    try {
        const user = yield call(onAuthStateChanged);
        yield put({ type: USER_SIGNIN_SUCCESS, payload: user })
    } catch (error) {
        yield put({ type: USER_SIGNIN_FAILURE, payload: error })
    }
}

export function* watchUserSignIn () {
    yield takeEvery(USER_SIGNIN, userSignIn)
}

export function* watchUserSignOut () {
    yield takeEvery(USER_SIGNOUT, userSignOut)
}

export function* watchGetUser () {
    yield takeEvery(GET_USER, getUser)
}