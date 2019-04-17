import React from "react";
import { createStackNavigator } from "react-navigation";
import ShopNavigation from "./ShopNavigation";
const UserHomeNavigator = createStackNavigator({
    UserHome: {
        screen: ShopNavigation,
        navigationOptions: {
            header: null,
        }
    },
});

class UserHomeScreen extends React.Component {
    static router = UserHomeNavigator.router;
    render() {
        return (
            <UserHomeNavigator navigation={this.props.navigation} />
        );
    }
}
export default UserHomeScreen;