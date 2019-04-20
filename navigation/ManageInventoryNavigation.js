import React from "react";
import { createStackNavigator } from "react-navigation";
/*components*/
import BackButton from "../components/BackButton";
/*Screens*/
import ManageInventoryScreen from "../screens/ManageInventoryScreen";
import CreateInventoryScreen from "../screens/CreateInventoryScreen";
import InventoryItemsScreen from "../screens/InventoryItemsScreen";
import ManageItemScreen from "../screens/ManageItemScreen";
import ScanBarcodeScreen from "../screens/ScanBarcodeScreen";

const ManageInventoryNavigation = createStackNavigator({
    ManageInventory: {
        screen: ManageInventoryScreen,
    },
    CreateInventory: {
        screen: CreateInventoryScreen,
    },
    ViewInventory: {
        screen: InventoryItemsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: "Inventory List",
                headerLeft: (<BackButton navigation={navigation} />),
            }
        },
    },
    ManageItem: {
        screen: ManageItemScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: "Inventory Item",
                headerLeft: (<BackButton navigation={navigation} />),
            }
        },
    },
    ScanBarcode: {
        screen: ScanBarcodeScreen
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