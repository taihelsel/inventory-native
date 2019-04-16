import { SET_SHOPS } from "./actionTypes";

export const setShops = ({ shops }) => {
    return {
        type: SET_SHOPS,
        payload: { shops },
    }
}
