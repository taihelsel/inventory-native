import React from "react";
import { createStackNavigator } from "react-navigation";
/*Components*/
import BackButton from "../components/BackButton";
/*Screens*/
import AdminHomeScreen from "../screens/AdminHomeScreen";
/*Navigation Stacks*/
import ManageInventoryNavigation from "./ManageInventoryNavigation";
import ManageUsersNavigation from "./ManageUsersNavigation";
export default createStackNavigator({
    AdminHome: {
        screen: AdminHomeScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: "Admin Pannel",
                headerLeft: (<BackButton navigation={navigation} />),
            }
        },
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