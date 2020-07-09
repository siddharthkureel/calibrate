import { 
    USER_SIGNIN, 
    USER_SIGNOUT, 
    GET_USER, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNIN_FAILURE, 
} from 'src/constants';

export const userSignOut = () => ({ type: USER_SIGNOUT })
export const getUser = () => ({ type: GET_USER })

export const userSignIn = (payload: {}) => ({ type: USER_SIGNIN, payload })
export const userSignSuccess = (payload: {})=> ({ type: USER_SIGNIN_SUCCESS, payload })
export const userSignInFailure = (payload: {})=> ({ type: USER_SIGNIN_FAILURE, payload })

