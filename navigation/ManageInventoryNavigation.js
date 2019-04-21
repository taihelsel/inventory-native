import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "react-navigation";
/*components*/
import BackButton from "../components/BackButton";
import { AntDesign } from "@expo/vector-icons";
/*Screens*/
import CreateInventoryScreen from "../screens/CreateInventoryScreen";
import InventoryItemsScreen from "../screens/InventoryItemsScreen";
import ManageItemScreen from "../screens/ManageItemScreen";
import ScanBarcodeScreen from "../screens/ScanBarcodeScreen";
import ViewCameraRollScreen from "../screens/ViewCameraRollScreen";
const ManageInventoryNavigation = createStackNavigator({
    ManageInventory: {
        screen: InventoryItemsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: "Manage Inventory",
                headerLeft: (<BackButton navigation={navigation} />),
                headerRight: (
                    <TouchableOpacity underlayColor="transparent" onPress={() => { navigation.navigate("CreateInventory") }}>
                        <View style={{ paddingHorizontal: 25, paddingTop: 8, }}>
                            <AntDesign style={{ color: "grey" }} size={28} name="plussquareo" />
                        </View>
                    </TouchableOpacity>
                )
            }
        },
    },
    CreateInventory: {
        screen: CreateInventoryScreen,
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
    },
    ViewCameraRoll: {
        screen: ViewCameraRollScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: "Camera Roll",
                headerLeft: (<BackButton navigation={navigation} />),
            }
        },
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