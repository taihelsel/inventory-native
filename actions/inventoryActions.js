import { UPDATE_SEARCH_TEXT, SET_INVENTORY, MARK_INVENTORY_IN_RESTOCK, MARK_INVENTORY_IN_CART } from "./actionTypes";

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
export const markInventoryInCart = ({ inventoryItem }) => {
    return {
        type: MARK_INVENTORY_IN_CART,
        payload: { inventoryItem },
    }
}
export const markInventoryInRestock = ({ inventoryItem }) => {
    return {
        type: MARK_INVENTORY_IN_RESTOCK,
        payload: { inventoryItem },
    }
}