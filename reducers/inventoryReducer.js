import { SET_INVENTORY, UPDATE_SEARCH_TEXT, MARK_INVENTORY_IN_CART, MARK_INVENTORY_IN_RESTOCK } from "../actions/actionTypes";
const initState = {
    searchText: "",
    inventoryCategories: {},
    inventoryItems: {},
}
const inventoryReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INVENTORY: {
            const { inventoryItems, inventoryCategories } = action.payload;
            return {
                ...state,
                inventoryItems,
                inventoryCategories,
            }
        }
        case UPDATE_SEARCH_TEXT: {
            const { text } = action.payload;
            return {
                ...state,
                searchText: text,
            }
        }
        case MARK_INVENTORY_IN_CART: {
            const { inventoryItem } = action.payload;
            let inventoryItems = { ...state.inventoryItems }, inventoryCategories = { ...state.inventoryCategories };
            inventoryItem.inCart = true;
            inventoryItems[inventoryItem.barcode] = { ...inventoryItem };
            inventoryCategories[inventoryItem.category][inventoryItem.barcode] = { ...inventoryItem };
            return {
                ...state,
                inventoryItems,
                inventoryCategories,
            }
        }
        case MARK_INVENTORY_IN_RESTOCK: {
            const { inventoryItem } = action.payload;
            let inventoryItems = { ...state.inventoryItems }, inventoryCategories = { ...state.inventoryCategories };
            inventoryItem.inRestock = true;
            inventoryItems[inventoryItem.barcode] = { ...inventoryItem };
            inventoryCategories[inventoryItem.category][inventoryItem.barcode] = { ...inventoryItem };
            return {
                ...state,
                inventoryItems,
                inventoryCategories,
            }
        }
        default: return state;
    }
};

export default inventoryReducer;