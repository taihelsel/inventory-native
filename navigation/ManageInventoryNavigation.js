import React from "react";
import { createStackNavigator } from "react-navigation";
/*Screens*/
import ManageInventoryScreen from "../screens/ManageInventoryScreen";
import CreateInventoryScreen from "../screens/CreateInventoryScreen";

const ManageInventoryNavigation = createStackNavigator({
    ManageInventory: {
        screen: ManageInventoryScreen,
        navigationOptions: {
            title: "Manage Inventory",
        }
    },
    CreateInventory: {
        screen: CreateInventoryScreen,
        navigationOptions: {
            title: "Add Inventory Item",
            headerBackTitle: "test",
        }
    }
}, {
        initialRouteName: "ManageInventory",
    }
);
ManageInventoryNavigation.navigationOptions = ({ navigation }) => {
    //hiding admin home navigation
    return {
        header: null
    }
};

export default ManageInventoryNavigation;