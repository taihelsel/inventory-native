import { UPDATE_CART, BUILD_CART, DELETE_CART_ITEM, ADD_CART_ITEM } from "../actions/actionTypes";
const initState = {
    cartData: [],
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
        case BUILD_CART: {
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
        case ADD_CART_ITEM: {
            const { data } = action.payload;
            const cartData = [...state.cartData];
            cartData.push(data);
            return {
                ...state,
                cartData
            }
        }
        default: return state;
    }
};

export default cartReducer;