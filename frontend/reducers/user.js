export const LOG_IN = 'LOG_IN'; // 액션 이름
export const LOG_OUT = 'LOG_OUT';

export const loginAction = {
    type: LOG_IN,
    data: {
        nickname: 'keenz'
    }
}

export const logoutAction = {
    type: LOG_OUT,
}

const initialState = {
    isLoggedIn: false,
    user: {},
};

export default (state = initialState, action) => { // 어떻게 다음 스테이트가 되는지
    switch(action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.data
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
};