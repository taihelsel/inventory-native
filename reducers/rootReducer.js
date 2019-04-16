import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import restockReducer from "./restockReducer";
import inventoryReducer from "./inventoryReducer";
/*firebase*/
import * as firebase from "firebase";
import firebaseConfig from "../firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const rootReducer = combineReducers({
    cart: cartReducer,
    restock: restockReducer,
    inventory: inventoryReducer,
    firebase: (state = { firebaseApp }) => state,
})

export default rootReducer;