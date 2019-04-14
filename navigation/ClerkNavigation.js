import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
/*Screens*/
import InventoryStack from "../screens/InventoryScreen";
import ClerkRestockScreen from "../screens/ClerkRestockScreen";
import ScanBarcodeStack from "../screens/ScanBarcodeScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const AppStackNavigator = createBottomTabNavigator({
    Inventory: {
        screen: InventoryStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="dropbox" size={30} style={{ color: tintColor }} />
            ),
        }
    },
    Restock: {
        screen: ClerkRestockScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="list" size={30} style={{ color: tintColor }} />
            ),
        }
    },
    ScanBarcode: {
        screen: ScanBarcodeStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="barcode" size={30} style={{ color: tintColor }} />
            ),
        }
    },
    Checkout: {
        screen: CheckoutScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="shopping-cart" size={30} style={{ color: tintColor }} />
            ),
        }
    },
}, {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: 'rgb(34,34,34)',
            },
            showIcon: true,
            showLabel: false,
        }
    }
)
const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;