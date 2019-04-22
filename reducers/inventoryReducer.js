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
            let inventoryItems = { ...state.inventoryItems };
            let inventoryCategories = { ...state.inventoryCategories };
            delete inventoryCategories[category][inventoryItems[barcode].title]
            inventoryCategories[newData.category][newData.title] = { ...newData };
            inventoryItems[newData.barcode] = { ...newData };
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