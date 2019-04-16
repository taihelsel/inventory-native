import React from "react";
import { createStackNavigator } from "react-navigation";
/*Screens*/
import LoginScreen from "../screens/LoginScreen";

const AuthStackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
});

class AuthenticationScreen extends React.Component {
    static router = AuthStackNavigator.router;
    render() {
        return (
            <AuthStackNavigator navigation={this.props.navigation} />
        );
    }
}
export default AuthenticationScreen;