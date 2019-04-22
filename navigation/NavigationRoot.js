import { createAppContainer, createSwitchNavigator } from 'react-navigation';
/*Screens*/
import LoadingScreen from "../screens/LoadingScreen";
/*Nav Stacks*/
import AuthNavigation from "./AuthNavigation";
import ShopNavigation from "./ShopNavigation";
const navigationRootSwitchStack = createSwitchNavigator({
    Auth: {
        screen: AuthNavigation
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