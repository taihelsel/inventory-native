import { BUILD_RESTOCK_LIST, DELETE_RESTOCK_ITEM, ADD_RESTOCK_ITEM } from "./actionTypes";

export const buildRestockList = (restockItems) => {
    return {
        type: BUILD_RESTOCK_LIST,
        payload: restockItems,
    }
}
export const deleteRestockItem = ({ restockItems, restockData }) => {
    return {
        type: DELETE_RESTOCK_ITEM,
        payload: { restockItems, restockData },
    }
}
export const addRestockItem = ({ data }) => {
    return {
        type: ADD_RESTOCK_ITEM,
        payload: { data },
    }
}