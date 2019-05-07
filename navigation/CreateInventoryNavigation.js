import { createStackNavigator } from "react-navigation";
/*Screens*/
import AddMediaScreen from "../screens/CreateInventory/AddMediaScreen";
import AddLabelsScreen from "../screens/CreateInventory/AddLabelsScreen";
import AddDescriptionScreen from "../screens/CreateInventory/AddDescriptionScreen";
import AddPriceScreen from "../screens/CreateInventory/AddPriceScreen";
export default createStackNavigator({
    AddMedia: {
        screen: AddMediaScreen,
    },
    AddLabels: {
        screen: AddLabelsScreen,
    },
    AddDescription: {
        screen: AddDescriptionScreen,
    },
    AddPrice: {
        screen: AddPriceScreen,
    },
}, {
        initialRouteName: "AddMedia",
        header: null,
    }
);