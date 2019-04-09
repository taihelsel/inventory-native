import { INIT_RESTOCK_LIST, DELETE_RESTOCK_ITEM } from "./actionTypes";

export const initRestock = (restockItems) => {
    return {
        type: INIT_RESTOCK_LIST,
        payload: restockItems,
    }
}
export const deleteRestockItem = ({ restockItems, restockData }) => {
    return {
        type: DELETE_RESTOCK_ITEM,
        payload: { restockItems, restockData },
    }
}