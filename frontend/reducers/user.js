export const LOG_IN = 'LOG_IN'; // 액션 이름
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';


const dummyUser = {
    nickname: 'keen',
    Post: [],
    Following: [],
    Followers: [],
    signUpData: {}
}
const initialState = {
    isLoggedIn: false,
    user: null,
};

export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data: data,
    }
}
export const loginAction = (data) => {
    type: LOG_IN,
    data
}

export const signUp = (data) => {
    return {
        type: SIGN_UP,
        data
    }
}

export const logoutAction = {
    type: LOG_OUT,
}

export default (state = initialState, action) => { // 어떻게 다음 스테이트가 되는지
    switch(action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
                loginData: action.data
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