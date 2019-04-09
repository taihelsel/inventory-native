import { UPDATE_CART, BUILD_CART, DELETE_CART_ITEM, ADD_CART_ITEM } from "./actionTypes";

export const updateCart = ({ minPrice, maxPrice, cartData }) => {
    return {
        type: UPDATE_CART,
        payload: { minPrice, maxPrice, cartData },
    }
}
export const buildCart = ({ minPrice, maxPrice, cartItems }) => {
    return {
        type: BUILD_CART,
        payload: { minPrice, maxPrice, cartItems },
    }
}
export const addCartItem = ({ data }) => {
    return {
        type: ADD_CART_ITEM,
        payload: { data },
    }
}
export const deleteCartItem = ({ minPrice, maxPrice, cartItems, cartData }) => {
    return {
        type: DELETE_CART_ITEM,
        payload: { minPrice, maxPrice, cartItems, cartData },
    }
}