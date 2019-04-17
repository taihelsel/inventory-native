import { SET_SHOPS, SET_CURRENT_SHOP } from "../actions/actionTypes";
const initState = {
    shops: [],
    currentShop: "",
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
        case SET_CURRENT_SHOP: {
            const { currentShop } = action.payload;
            return {
                ...state,
                currentShop
            }
        }
        default: return state;
    }
};

export default userReducer;