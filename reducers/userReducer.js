import { SET_SHOPS, SET_CURRENT_SHOP } from "../actions/actionTypes";
const initState = {
    shops: [],
    currentShop: "",
    currentGroup: "",
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
            const { shopId, group } = currentShop;
            return {
                ...state,
                currentShop: shopId,
                currentGroup: group,
            }
        }
        default: return state;
    }
};

export default userReducer;