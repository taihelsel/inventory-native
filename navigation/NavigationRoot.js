import { createAppContainer, createSwitchNavigator } from 'react-navigation';
/*Screens*/
import LoadingScreen from "../screens/LoadingScreen";
/*Nav Stacks*/
import AuthNavigation from "./AuthNavigation";
import ClerkNavigation from "./ClerkNavigation";
import BoxHandlerNavigation from "./BoxHandlerNavigation";
import ShopNavigation from "./ShopNavigation";
import AdminNavigation from "./AdminNavigation";
const navigationRootSwitchStack = createSwitchNavigator({
    Auth: {
        screen: AuthNavigation
    },
    UserHome: {
        screen: ShopNavigation,
    },
    Clerk: {
        screen: ClerkNavigation,
    },
    BoxHandler: {
        screen: BoxHandlerNavigation
    },
    Admin: {
        screen: AdminNavigation,
    },
    Loading: {
        screen: LoadingScreen
    },
}, {
        initialRouteName: "Admin", /*change back to loading screen once admin route is complete*/
    }
);

export default createAppContainer(navigationRootSwitchStack);