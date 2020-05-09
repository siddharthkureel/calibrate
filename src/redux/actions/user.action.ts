import { USER_SIGNIN, USER_SIGNOUT, GET_USER } from 'src/constants';

export const userSignIn = (payload: {}) => {
    return {
        type: USER_SIGNIN,
        payload
    }
}

export const userSignOut = () => {
    return {
        type: USER_SIGNOUT
    }
}

export const getUser = () => {
    return {
        type: GET_USER
    }
}