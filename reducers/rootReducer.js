import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import restockReducer from "./restockReducer";
import inventoryReducer from "./inventoryReducer";
const rootReducer = combineReducers({
    cart: cartReducer,
    restock: restockReducer,
    inventory: inventoryReducer,
})

export default rootReducer;