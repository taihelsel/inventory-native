import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import restockReducer from "./restockReducer";
const rootReducer = combineReducers({
    cart: cartReducer,
    restock: restockReducer
})

export default rootReducer;