import { takeEvery, put, call } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import { USER_SIGNIN, USER_SIGNOUT, GET_USER, USER_SIGNUP } from 'src/constants';
import { userActions } from 'src/redux/actions';

const { userSignInSuccess, userSignInFailure, userSignUpSuccess, userSignUpFailure } = userActions;

function* userSignIn (action: any) {
    try {
        const { email, password } =  action.payload;
        const user = yield Auth.signIn(email, password)
        console.log(user)
        yield put(userSignInSuccess(user))
    } catch (error) {
        yield put(userSignInFailure(error))
    }
}

function* userSignUp (action: any) {
    try {
        const { email, password } =  action.payload;
        const user = yield Auth.signUp(email, password)
        yield put(userSignUpSuccess(user))
    } catch (error) {
        yield put(userSignUpFailure(error))
    }
}

function* userSignOut () {
    yield Auth.signOut()
}

function* getUser () {
    try {
        const user = yield Auth.currentAuthenticatedUser()
        yield put(userSignInSuccess(user))
    } catch (error) {
        yield put(userSignInFailure(error))
    }
}

export function* watchUserSignIn () { yield takeEvery(USER_SIGNIN, userSignIn) }
export function* watchUserSignUp () { yield takeEvery(USER_SIGNUP, userSignUp) }
export function* watchUserSignOut () { yield takeEvery(USER_SIGNOUT, userSignOut) }
export function* watchGetUser () { yield takeEvery(GET_USER, getUser) }