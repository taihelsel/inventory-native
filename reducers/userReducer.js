import { SET_SHOPS } from "../actions/actionTypes";
const initState = {
    shops: [],
}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SHOPS: {
            const { shops } = action.payload;
            return {
                ...state,
                shops
            }
        }
        default: return state;
    }
};

export default userReducer;