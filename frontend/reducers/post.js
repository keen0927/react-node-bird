const initialState = {
    mainPosts: [],
}

export const ADD_POST = "/post/ADD_POST";
export const ADD_DUMMY = "/POST/ADD_DUMMY";

const addPost = {
    type: ADD_POST
}

const addDummy = {
    type: ADD_DUMMY
}

export default ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state
            }
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [
                    action.data,
                    ...state.mainPosts
                ]
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
}