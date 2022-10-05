
const userReducer = (state = {users: [], user: null}, action) => {
    switch (action.type) {
        case "LOAD_USERS":
            return {
                ...state,
                users: action.payload
            };
        case "CHOOSE_USER":
            let id = action.payload;
            let user = state.users.find(value => value.id === id);
            return {...state, user: user}

        default:
            return state;

    }


}


const postReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case "LOAD_POSTS":
            return {
                ...state,
                posts: action.payload
            };

        default:
            return state;

    }
}
export {userReducer,postReducer}