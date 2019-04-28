import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation";
/*Screens*/
import InventoryStack from "../screens/InventoryScreen";
import ClerkRestockScreen from "../screens/ClerkRestockScreen";
import ScanBarcodeStack from "../screens/ScanBarcodeScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ProfileScreen from "../screens/ProfileScreen";

const ClerkStackNavigator = createBottomTabNavigator({
    Inventory: {
        screen: InventoryStack,
        navigationOptions: ({ navigation }) => {
            const currentScreen = navigation.state.routes[navigation.state.routes.length - 1].routeName;
            if (currentScreen === "ItemOverviewScreen") {
                return {
                    tabBarVisible: false,
                }
            }
            return {
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="dropbox" size={30} style={{ color: tintColor }} />
                ),
            }
        },
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
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user" size={30} style={{ color: tintColor }} />
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
export default ClerkStackNavigator;