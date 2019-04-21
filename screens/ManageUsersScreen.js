import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
/*Components*/
import BackButton from "../components/BackButton";
import UserList from "../components/UserList";
class ManageUsersScreen extends Component {
    state = {
        testUserData: [
            {
                email: "test@test.com",
                group: "admin",
            }
        ]
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Manage Users",
            headerLeft: (<BackButton navigation={navigation} dest={"AdminHome"} />)
        }
    }
    handleUserTouch = user => e => {
        console.log("user touched", user);
    }
    render() {
        return (
            <View style={styles.container}>
                <UserList users={this.state.testUserData} handleTouch={this.handleUserTouch} />
            </View>
        );
    }

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    listItemWrapper: {
        marginTop: 2,
        marginHorizontal: 2,
    }
});
export default ManageUsersScreen;