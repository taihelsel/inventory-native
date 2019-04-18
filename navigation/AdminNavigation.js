import { createStackNavigator } from "react-navigation";
/*Screens*/
import AdminHomeScreen from "../screens/AdminHomeScreen";
import ManageInventoryScreen from "../screens/ManageInventoryScreen";

export default createStackNavigator({
    AdminHome: {
        screen: AdminHomeScreen,
    },
    ManageInventory: {
        screen: ManageInventoryScreen,
    }
}, {
        initialRouteName: "AdminHome",
        defaultNavigationOptions: {
            header: null,
        }
    }
);