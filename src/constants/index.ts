export const PATHS = {
    HOME: '/',
    SIGNUP: '/signup',
    SIGNIN: '/signin',
    DASHBOARD: {
        ROOT: '/dashboard'
    },
    CHATS: '/chats',
    CLIENT: '/client',
    PROFILE: '/profile',
    TASKS: '/tasks',
    NUTRITION: '/nutrition',
    NOTIFICATIONS: '/notification'
}
export const colors = {
    baseWhite: '#fafafa',
    baseBlack: '#2B1805',
    primary: '#FF8E1E',
    secondary: '#2B1805',
    primaryLight: '#fea44b',
    primaryDark: '#e47100',
    primaryTranslucent:'rgba(255, 142, 30, 0.5)'
}
//-------------------------->CLIENT<--------------------------//
export const LOAD_CLIENTS = 'LOAD_CLIENTS';
export const ADD_CLIENT = 'ADD_CLIENT';

//-------------------------->USER<--------------------------//
export const GET_USER = 'GET_USER';
export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNED_SUCCESS';
export const USER_SIGNIN_FAILURE = 'USER_SIGNED_FAILURE';
export const USER_SIGNOUT = 'USER_SIGNOUT';
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT';
