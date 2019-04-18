import { createStackNavigator } from "react-navigation";
/*Screens*/
import AdminHomeScreen from "../screens/AdminHomeScreen";
import ManageRestockScreen from "../screens/ManageRestockScreen";
import ManageUsersScreen from "../screens/ManageUsersScreen";
/*Navigation Stacks*/
import ManageInventoryNavigation from "./ManageInventoryNavigation";
export default createStackNavigator({
    AdminHome: {
        screen: AdminHomeScreen,
        navigationOptions: {
            title: "Admin Pannel",
        }
    },
    ManageInventory: {
        screen: ManageInventoryNavigation,
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