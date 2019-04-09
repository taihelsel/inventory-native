import { INIT_RESTOCK_LIST, DELETE_RESTOCK_ITEM } from "../actions/actionTypes";
import restockData from "../datasets/testRestockDataset";
const initState = {
    restockData, //importing from local file
    restockItems: [],
}
const restockReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_RESTOCK_LIST: {
            const { restockItems } = action.payload;
            return {
                ...state,
                restockItems
            }
        }
        case DELETE_RESTOCK_ITEM: {
            const { restockItems, restockData } = action.payload;
            return {
                ...state,
                restockItems,
                restockData
            }
        }
        default: return state;
    }
};

export default restockReducer;