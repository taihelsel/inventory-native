import { UPDATE_CART } from "../actions/actionTypes";
import cartData from "../datasets/testCartDataset";
const initState = {
    cartData,
    minPrice: 0,
    maxPrice: 0,
    cartItems: [],
}
const checkout = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_CART: {
            const { minPrice, maxPrice, cartData } = action.payload;
            return {
                ...state,
                minPrice,
                maxPrice,
                cartData
            }
        }
        default: return state;
    }
};

export default checkout;