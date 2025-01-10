const initialState = {
    user: null,
    address: [],
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, user: action.payload };
    
        default:
            return state;
    }
};