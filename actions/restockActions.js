import { DELETE_RESTOCK_ITEM, ADD_RESTOCK_ITEM } from "./actionTypes";

export const deleteRestockItem = ({ restockData }) => {
    return {
        type: DELETE_RESTOCK_ITEM,
        payload: { restockData },
    }
}
export const addRestockItem = ({ data }) => {
    return {
        type: ADD_RESTOCK_ITEM,
        payload: { data },
    }
}