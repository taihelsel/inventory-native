import { createAppContainer, createSwitchNavigator } from 'react-navigation';
/*Screens*/
import LoadingScreen from "../screens/LoadingScreen";
/*Nav Stacks*/
import AuthNavigation from "./AuthNavigation";
import ShopNavigation from "./ShopNavigation";
import CreateInventoryNavigation from "./CreateInventoryNavigation";
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
    CreateInventory: {
        screen: CreateInventoryNavigation,
    }
}, {
        initialRouteName: "CreateInventory",//remove once testing is done
    }
);

export default createAppContainer(navigationRootSwitchStack);