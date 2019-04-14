import { DELETE_RESTOCK_ITEM, ADD_RESTOCK_ITEM } from "../actions/actionTypes";
const initState = {
    restockData: {}, //source data
}
const restockReducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_RESTOCK_ITEM: {
            const { restockData } = action.payload;
            return {
                ...state,
                restockData
            }
        }
        case ADD_RESTOCK_ITEM: {
            const { data } = action.payload;
            const restockData = { ...state.restockData };
            restockData[data.barcode] = { ...data };
            return {
                ...state,
                restockData
            }
        }
        default: return state;
    }
};

export default restockReducer;