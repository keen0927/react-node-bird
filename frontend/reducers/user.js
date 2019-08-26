export const LOG_IN = 'LOG_IN'; // 액션 이름
export const LOG_OUT = 'LOG_OUT';


const dummyUser = {
    nickname: 'keen',
    Post: [],
    Following: [],
    Followers: []
}
const initialState = {
    isLoggedIn: false,
    user: null,
};

export const loginAction = {
    type: LOG_IN
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