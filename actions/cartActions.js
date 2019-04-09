import { UPDATE_CART, INIT_CART, DELETE_CART_ITEM } from "./actionTypes";

export const updateCart = ({ minPrice, maxPrice, cartData }) => {
    return {
        type: UPDATE_CART,
        payload: { minPrice, maxPrice, cartData },
    }
}
export const initCart = ({ minPrice, maxPrice, cartItems }) => {
    return {
        type: INIT_CART,
        payload: { minPrice, maxPrice, cartItems },
    }
}
export const deleteCartItem = ({ minPrice, maxPrice, cartItems, cartData }) => {
    return {
        type: DELETE_CART_ITEM,
        payload: { minPrice, maxPrice, cartItems, cartData },
    }
}