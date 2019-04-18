import { createStackNavigator } from "react-navigation";
/*Screens*/
import ManageInventoryScreen from "../screens/ManageInventoryScreen";
import CreateInventoryScreen from "../screens/CreateInventoryScreen";
import ViewInventoryScreen from "../screens/ViewInventoryScreen";

const ManageInventoryNavigation = createStackNavigator({
    ManageInventory: {
        screen: ManageInventoryScreen,
    },
    CreateInventory: {
        screen: CreateInventoryScreen,
    },
    ViewInventory: {
        screen: ViewInventoryScreen,
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