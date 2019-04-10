import { SET_INVENTORY, UPDATE_SEARCH_TEXT } from "../actions/actionTypes";
import inventoryData from "../datasets/testInventoryDataset";
const initState = {
    searchText: "",
    inventoryCategories: [],
    inventoryItems: [],
    inventoryData
}
const inventoryReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INVENTORY: {
            const { inventoryItems, inventoryCategories } = action.payload;
            return {
                ...state,
                inventoryItems,
                inventoryCategories
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