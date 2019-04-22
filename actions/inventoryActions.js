import { UPDATE_SEARCH_TEXT, SET_INVENTORY, UPDATE_INVENTORY_ITEM, ADD_INVENTORY_ITEM } from "./actionTypes";

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
export const updateInventoryItem = ({ barcode, category, newData }) => {
    return {
        type: UPDATE_INVENTORY_ITEM,
        payload: { barcode, category, newData }
    }
}
export const addInventoryItem = ({ newItem }) => {
    return {
        type: ADD_INVENTORY_ITEM,
        payload: { newItem },
    }
}