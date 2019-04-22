import { UPDATE_CART, DELETE_CART_ITEM, ADD_CART_ITEM, UPDATE_CART_ITEM } from "../actions/actionTypes";
const initState = {
    cartData: {}, //source data
    minPrice: 0,
    maxPrice: 0,
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
        case UPDATE_CART_ITEM: {
            const { barcode, newData } = action.payload;
            let cartData = { ...state.cartData };
            let { minPrice, maxPrice } = state;
            minPrice -= parseInt(cartData[barcode].price.min) * parseInt(cartData[barcode].amnt);
            maxPrice -= parseInt(cartData[barcode].price.max) * parseInt(cartData[barcode].amnt);
            delete cartData[barcode];
            cartData[newData.barcode] = { ...newData };
            minPrice += parseInt(newData.price.min) * parseInt(newData.amnt);
            maxPrice += parseInt(newData.price.max) * parseInt(newData.amnt);
            return {
                ...state,
                cartData,
                minPrice,
                maxPrice,
            }
        }
        case DELETE_CART_ITEM: {
            const { key } = action.payload;
            const cartData = { ...state.cartData };
            let { minPrice, maxPrice } = state;
            minPrice -= parseInt(cartData[key].price.min);
            maxPrice -= parseInt(cartData[key].price.max);
            delete cartData[key];
            return {
                ...state,
                cartData,
                minPrice,
                maxPrice
            }
        }
        case ADD_CART_ITEM: {
            const { data } = action.payload;
            const cartData = { ...state.cartData };
            let { minPrice, maxPrice } = state;
            cartData[data.barcode] = { ...data };
            minPrice += parseInt(data.price.min);
            maxPrice += parseInt(data.price.max);
            return {
                ...state,
                cartData,
                minPrice,
                maxPrice
            }
        }
        default: return state;
    }
};

export default cartReducer;