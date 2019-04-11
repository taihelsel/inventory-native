import { UPDATE_SEARCH_TEXT, SET_INVENTORY } from "./actionTypes";

export const updateSearchText = ({ text }) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: { text },
    }
}
export const setInventory = ({ inventoryItems, inventoryCategories }) => {
    return {
        type: SET_INVENTORY,
        payload: { inventoryItems, inventoryCategories },
    }
}
