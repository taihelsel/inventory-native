import { UPDATE_CART, DELETE_CART_ITEM, ADD_CART_ITEM, UPDATE_CART_ITEM } from "../actions/actionTypes";
const initState = {
    cartData: {}, //source data
    minPrice: 0,
    maxPrice: 0,
}
const calculatePrice = (k, o) => {
    if (typeof o.price === "object") {
        return parseFloat(o.price[k]) * parseFloat(o.amnt);
    } else {
        return parseFloat(o.price) * parseFloat(o.amnt);
    }
}
const getPrice = (k, price) => {
    if (typeof price === "object") return parseFloat(price[k]);
    else return (parseFloat(price))
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
            //remove old item
            minPrice -= calculatePrice("min", cartData[barcode]);
            maxPrice -= calculatePrice("max", cartData[barcode]);
            delete cartData[barcode];
            //add new item
            cartData[newData.barcode] = { ...newData };
            minPrice += calculatePrice("min", newData);
            maxPrice += calculatePrice("max", newData);
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
            minPrice -= calculatePrice("min", cartData[key]);
            maxPrice -= calculatePrice("max", cartData[key]);
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
            minPrice += getPrice("min", data.price);
            maxPrice += getPrice("max", data.price);
            console.log("new cart item added", data);

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