import { SET_SHOPS, SET_CURRENT_SHOP } from "./actionTypes";

export const setShops = ({ shops }) => {
    return {
        type: SET_SHOPS,
        payload: { shops },
    }
}
export const setCurrentShop = ({ currentShop }) => {
    return {
        type: SET_CURRENT_SHOP,
        payload: { currentShop },
    }
}
