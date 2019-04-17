import { createStackNavigator } from "react-navigation";
/*Screens*/
import LoginScreen from "../screens/LoginScreen";

const AuthStackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
});

export default AuthStackNavigator;