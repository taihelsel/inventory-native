import { DELETE_RESTOCK_ITEM, ADD_RESTOCK_ITEM, UPDATE_RESTOCK_ITEM } from "../actions/actionTypes";
const initState = {
    restockData: {}, //source data
}
const restockReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_RESTOCK_ITEM: {
            console.log("update restock item ");
            const { barcode, newData } = action.payload;
            let restockData = { ...state.restockData };
            delete restockData[barcode];
            restockData[newData.barcode] = { ...newData };
            return {
                ...state,
                restockData
            }
        }
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