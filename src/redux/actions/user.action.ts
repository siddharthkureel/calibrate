import { 
    USER_SIGNIN,
    USER_SIGNUP,  
    USER_SIGNOUT, 
    GET_USER, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNIN_FAILURE,
    USER_SIGNUP_SUCCESS, 
    USER_SIGNUP_FAILURE, 
} from 'src/constants';

export const userSignOut = () => ({ type: USER_SIGNOUT })
export const getUser = () => ({ type: GET_USER })

export const userSignIn = (payload: {}) => ({ type: USER_SIGNIN, payload })
export const userSignInSuccess = (payload: {})=> ({ type: USER_SIGNIN_SUCCESS, payload })
export const userSignInFailure = (payload: {})=> ({ type: USER_SIGNIN_FAILURE, payload })

export const userSignUp = (payload: {}) => ({ type: USER_SIGNUP, payload })
export const userSignUpSuccess = (payload: {})=> ({ type: USER_SIGNUP_SUCCESS, payload })
export const userSignUpFailure = (payload: {})=> ({ type: USER_SIGNUP_FAILURE, payload })