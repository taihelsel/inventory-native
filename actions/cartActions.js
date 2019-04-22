import { UPDATE_CART, DELETE_CART_ITEM, ADD_CART_ITEM, UPDATE_CART_ITEM } from "./actionTypes";

export const updateCart = ({ minPrice, maxPrice, cartData }) => {
    return {
        type: UPDATE_CART,
        payload: { minPrice, maxPrice, cartData },
    }
}
export const updateCartItem = ({ barcode, newData }) => {
    return {
        type: UPDATE_CART_ITEM,
        payload: { barcode, newData },
    }
}
export const addCartItem = ({ data }) => {
    return {
        type: ADD_CART_ITEM,
        payload: { data },
    }
}
export const deleteCartItem = ({ key }) => {
    return {
        type: DELETE_CART_ITEM,
        payload: { key },
    }
}