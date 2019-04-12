import React, { Component } from "react";
import { View, Text } from "react-native";
/*Test component*/
const Test = () => {
    return (
        <View>
            <Text>
                Hello World
            </Text>
        </View>
    );
}
/*Nav Stacks*/
import ClerkNavigation from "./ClerkNavigation";
export default class NavigationRoot extends Component {
    state = {
        isLoggedIn: true,
    };
    render() {
        return this.state.isLoggedIn ? (
            <ClerkNavigation />
        ) : (
                <Test />
            )
    }
}