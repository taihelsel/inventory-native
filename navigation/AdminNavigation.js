import { createStackNavigator } from "react-navigation";
/*Screens*/
import AdminHomeScreen from "../screens/AdminHomeScreen";
/*Navigation Stacks*/
import ManageInventoryNavigation from "./ManageInventoryNavigation";
import ManageUsersNavigation from "./ManageUsersNavigation";
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
    ManageUsers: {
        screen: ManageUsersNavigation,
    },
}, {
        initialRouteName: "AdminHome",
    }
);