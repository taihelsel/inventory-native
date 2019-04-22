import { createStackNavigator } from "react-navigation";
/*Screens*/
import ShopSelectScreen from "../screens/ShopSelectScreen";
/*Nav Stacks*/
import ClerkNavigation from "./ClerkNavigation";
import BoxHandlerNavigation from "./BoxHandlerNavigation";
import AdminNavigation from "./AdminNavigation";
export default createStackNavigator({
    ShopSelect: {
        screen: ShopSelectScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: "Shop Select",
            }
        },
    },
    Clerk: {
        screen: ClerkNavigation,
        navigationOptions: ({ navigation }) => {
            return {
                header: null,
            }
        },
    },
    BoxHandler: {
        screen: BoxHandlerNavigation,
        navigationOptions: ({ navigation }) => {
            return {
                header: null,
            }
        },
        
    },
    Admin: {
        screen: AdminNavigation,
        navigationOptions: ({ navigation }) => {
            return {
                header: null,
            }
        },
    },
}, {
        initialRouteName: "ShopSelect",
    }
);