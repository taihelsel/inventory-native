import { createAppContainer, createSwitchNavigator } from 'react-navigation';
/*Screens*/
import LoadingScreen from "../screens/LoadingScreen";
/*Nav Stacks*/
import AuthNavigation from "./AuthNavigation";
import ClerkNavigation from "./ClerkNavigation";
import BoxHandlerNavigation from "./BoxHandlerNavigation";
import ShopNavigation from "./ShopNavigation";
const navigationRootSwitchStack = createSwitchNavigator({
    Auth: {
        screen: AuthNavigation
    },
    Clerk: {
        screen: ClerkNavigation,
    },
    BoxHandler: {
        screen: BoxHandlerNavigation
    },
    UserHome: {
        screen: ShopNavigation,
    },
    Loading: {
        screen: LoadingScreen
    },
}, {
        initialRouteName: "Loading",
    }
);

export default createAppContainer(navigationRootSwitchStack);