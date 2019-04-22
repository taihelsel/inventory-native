import { SET_INVENTORY, UPDATE_SEARCH_TEXT, UPDATE_INVENTORY_ITEM } from "../actions/actionTypes";
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
        case UPDATE_INVENTORY_ITEM: {
            const { barcode, category, newData } = action.payload;
            const inventoryItems = { ...state.inventoryItems };
            const inventoryCategories = { ...state.inventoryCategories };
            inventoryCategories[category][inventoryItems[barcode].title] = { ...newData };
            inventoryItems[barcode] = { ...newData };
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