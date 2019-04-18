import { createStackNavigator } from "react-navigation";
/*Screens*/
import AdminHomeScreen from "../screens/AdminHomeScreen";
import ManageInventoryScreen from "../screens/ManageInventoryScreen";
import ManageRestockScreen from "../screens/ManageRestockScreen";
import ManageUsersScreen from "../screens/ManageUsersScreen";

export default createStackNavigator({
    AdminHome: {
        screen: AdminHomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    ManageInventory: {
        screen: ManageInventoryScreen,
    },
    ManageRestock: {
        screen: ManageRestockScreen,
    },
    ManageUsers: {
        screen: ManageUsersScreen,
    },
}, {
        initialRouteName: "AdminHome",
    }
);