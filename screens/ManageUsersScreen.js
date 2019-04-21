import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
/*Components*/
import { Feather } from "@expo/vector-icons";
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
            headerLeft: (<BackButton navigation={navigation} dest={"AdminHome"} />),
            headerRight: (
                <TouchableOpacity underlayColor="transparent" onPress={() => { navigation.navigate("CreateUser") }}>
                    <View style={{ paddingHorizontal: 25, paddingTop: 6, }}>
                        <Feather style={{ color: "grey" }} size={25} name="user-plus" />
                    </View>
                </TouchableOpacity>
            )
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