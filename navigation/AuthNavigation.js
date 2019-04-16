import { createStackNavigator } from "react-navigation";
/*Screens*/
import LoginScreen from "../screens/LoginScreen";
const authStackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
});
export default authStackNavigator;