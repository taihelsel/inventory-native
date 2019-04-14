import { createAppContainer, createBottomTabNavigator } from "react-navigation";
/*Screens*/
import BoxHandlerRestockScreen from "../screens/BoxHandlerRestockScreen";
import OutOfStockScreen from "../screens/OutOfStockScreen";
const AppStackNavigator = createBottomTabNavigator({
    Restock: {
        screen: BoxHandlerRestockScreen,
    },
    OutOfStock: {
        screen: OutOfStockScreen,
    },
});
export default BoxHandlerNavigation = createAppContainer(AppStackNavigator);