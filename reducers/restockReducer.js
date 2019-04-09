import { BUILD_RESTOCK_LIST, DELETE_RESTOCK_ITEM, ADD_RESTOCK_ITEM } from "../actions/actionTypes";
const initState = {
    restockData: [],
    restockItems: [],
}
const restockReducer = (state = initState, action) => {
    switch (action.type) {
        case BUILD_RESTOCK_LIST: {
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
        case ADD_RESTOCK_ITEM: {
            const { data } = action.payload;
            const restockData = [...state.restockData];
            restockData.push(data);
            return {
                ...state,
                restockData
            }
        }
        default: return state;
    }
};

export default restockReducer;