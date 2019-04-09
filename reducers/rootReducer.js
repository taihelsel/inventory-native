import { combineReducers } from "redux";
import cartReducers from "./cartReducers";

const rootReducer = combineReducers({
    cart: cartReducers,
})

export default rootReducer;