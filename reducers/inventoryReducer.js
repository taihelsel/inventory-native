import { SET_INVENTORY, UPDATE_SEARCH_TEXT } from "../actions/actionTypes";
const initState = {
    searchText: "",
    inventoryCategories: {},
    inventoryItems: [],
    inventoryBarcodeData: {}
}
const inventoryReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INVENTORY: {
            const { inventoryItems, inventoryCategories, inventoryBarcodeData } = action.payload;
            return {
                ...state,
                inventoryItems,
                inventoryCategories,
                inventoryBarcodeData,
            }
        }
        case UPDATE_SEARCH_TEXT: {
            const { text } = action.payload;
            return {
                ...state,
                searchText: text,
            }
        }
        default: return state;
    }
};

export default inventoryReducer;