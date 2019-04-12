import React, { Component } from "react";
import { View, Text } from "react-native";
/*Nav Stacks*/
import ClerkNavigation from "./ClerkNavigation";
/*Components*/
import UserTypeOptions from "../components/UserTypeOptions";
export default class NavigationRoot extends Component {
    state = {
        userType: "clerk",
    };
    handleOptionTypePress = type => e => {
        this.setState({ userType: type });
    }
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
                return <UserTypeOptions handlePress={this.handleOptionTypePress} />
            }
        }
    }
}