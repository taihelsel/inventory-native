import React, { Component } from "react";
import { View, Text } from "react-native";
/*Nav Stacks*/
import ClerkNavigation from "./ClerkNavigation";
export default class NavigationRoot extends Component {
    state = {
        userType: "clerk",
    };
    render() {
        switch (this.state.userType) {
            case "clerk": {
                return <ClerkNavigation />
            }
            case "box-handler": {
                return <Text>Box Handler Screen Here</Text>
            }
            case "admin": {
                return <Text>Admin Screen Here</Text>
            }
            default: {
                return <Text>Show sign in options here</Text>
            }
        }
    }
}