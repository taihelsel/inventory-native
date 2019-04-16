import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
/*Nav Stacks*/
import AuthNavigation from "./AuthNavigation";
import ClerkNavigation from "./ClerkNavigation";
import BoxHandlerNavigation from "./BoxHandlerNavigation";
/*Components*/
import UserTypeOptions from "../components/UserTypeOptions";
class NavigationRoot extends Component {
    state = {
        screenType: "logged-out",
        shops: [],
    };
    componentDidMount() {
        const { firebase } = this.props;
        firebase.auth().onAuthStateChanged(user => {
            const { user } = res;
            const userRef = firebase.database().ref("users/" + user.uid);
            userRef.on("value", snapshot => {
                const data = snapshot.val();
                const { shops } = data;
                this.setState({ shops, screenType: null });
            });
        })
    }
    handleOptionTypePress = type => e => {
        this.setState({ screenType: type });
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
                return <UserTypeOptions shops={this.state.shops} handlePress={this.handleOptionTypePress} />
            }
        }
    }
}
const mapStateToProps = state => ({
    firebase: state.firebase.firebaseApp,
});
export default connect(mapStateToProps, null)(NavigationRoot);