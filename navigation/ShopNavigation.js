import { createStackNavigator } from "react-navigation";
/*Screens*/
import ShopSelectScreen from "../screens/ShopSelectScreen";
import ShopUserTypeScreen from "../screens/ShopUserTypeScreen";

export default createStackNavigator({
    ShopSelect: {
        screen: ShopSelectScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: "Shop Select",
            }
        },
    },
    ShopUserType: {
        screen: ShopUserTypeScreen,
    }
}, {
        initialRouteName: "ShopSelect",
    }
);