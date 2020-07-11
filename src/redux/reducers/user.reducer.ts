import { USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNIN_FAILURE, USER_SIGNUP_FAILURE, USER_SIGNUP_SUCCESS } from 'src/constants';

const initialState = {
    user: null, 
    loggedIn: false,
    loading: true
}

export const userReducer = (state=initialState, action: any) =>{
    switch (action.type) {
        case USER_SIGNIN_SUCCESS:
            return { ...state,  user: action.payload, loggedIn: true, loading: false}
        case USER_SIGNIN_FAILURE:
            return { ...state,  user: null, fail: action.payload, loggedIn: false, loading: false}
        case USER_SIGNUP_SUCCESS:
            return { ...state,  user: action.payload, loggedIn: true, loading: false}
        case USER_SIGNUP_FAILURE:
            return { ...state,  user: null, fail: action.payload, loggedIn: false, loading: false}
        case USER_SIGNOUT:
            return { ...state,  user: null, loggedIn: false, loading: false}
        default:
            return state
    }
}