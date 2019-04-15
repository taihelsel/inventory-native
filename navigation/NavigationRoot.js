import React, { Component } from "react";
import { View, Text } from "react-native";
/*Nav Stacks*/
import AuthNavigation from "./AuthNavigation";
import ClerkNavigation from "./ClerkNavigation";
import BoxHandlerNavigation from "./BoxHandlerNavigation";
/*Components*/
import UserTypeOptions from "../components/UserTypeOptions";
export default class NavigationRoot extends Component {
    state = {
        userType: "logged-out",
    };
    handleOptionTypePress = type => e => {
        this.setState({ userType: type });
    }
    render() {
        switch (this.state.userType) {
            case "logged-out": {
                return <AuthNavigation handlePress={this.handleOptionTypePress} />
            }
            case "clerk": {
                return <ClerkNavigation />
            }
            case "box-handler": {
                return <BoxHandlerNavigation />
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