import { UPDATE_CART, INIT_CART, DELETE_CART_ITEM } from "../actions/actionTypes";
import cartData from "../datasets/testCartDataset";
const initState = {
    cartData,
    minPrice: 0,
    maxPrice: 0,
    cartItems: [],
}
const cartReducer = (state = initState, action) => {
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
        case INIT_CART: {
            const { minPrice, maxPrice, cartItems } = action.payload;
            return {
                ...state,
                minPrice,
                maxPrice,
                cartItems
            }
        }
        case DELETE_CART_ITEM: {
            const { minPrice, maxPrice, cartItems, cartData } = action.payload;
            return {
                ...state,
                minPrice,
                maxPrice,
                cartItems,
                cartData
            }
        }
        default: return state;
    }
};

export default cartReducer;