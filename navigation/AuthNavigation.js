import { createAppContainer, createStackNavigator } from "react-navigation";
/*Screens*/
import LoginScreen from "../screens/LoginScreen";
const AppStackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
});
export default AuthNavigation = createAppContainer(AppStackNavigator);