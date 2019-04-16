import { createBottomTabNavigator } from "react-navigation";
/*Screens*/
import BoxHandlerRestockScreen from "../screens/BoxHandlerRestockScreen";
import OutOfStockScreen from "../screens/OutOfStockScreen";
const boxHandlerStackNavigator = createBottomTabNavigator({
    Restock: {
        screen: BoxHandlerRestockScreen,
    },
    OutOfStock: {
        screen: OutOfStockScreen,
    },
});
export default boxHandlerStackNavigator;