export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT = 'LOG_OUT';

const dummyUser = {
    nickname: 'keen',
    Post: [],
    Following: [],
    Followers: [],
}
const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
};

export const signUpAction = (data) => ({
    type: SIGN_UP,
    data: data,
});

export const loginAction = (data) => ({
    type: LOG_IN_REQUEST,
    data
});

export const signUp = (data) => ({
    type: SIGN_UP,
    data
});

export const logoutAction = ({
    type: LOG_OUT,
});

export default (state = initialState, action) => { // 어떻게 다음 스테이트가 되는지
    switch(action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
                loginData: action.data
            }
        }
        case LOG_IN_SUCCESS: {
            return {
                isLoggedIn: false
            }
        }
        case LOG_IN_FAILURE: {
            return {
                isLoggedIn: false
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.data
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
};