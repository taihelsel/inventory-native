import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
/*Components*/
import BackButton from "../components/BackButton";
import LargeListItem from "../components/LargeListItem";
class ManageUsersScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Manage Users",
            headerLeft: (<BackButton navigation={navigation} dest={"AdminHome"} />)
        }
    }
    handlePress = navigation => option => {
        switch (option) {
            case "create-user": {
                console.log("create user btn pressed");
                break;
            }
            case "view-users": {
                console.log("view users btn pressed");
                break;
            }
            default: {
                console.log("error: item not found in admin navigation");
                break;
            }
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.listItemWrapper}>
                    <LargeListItem title={"Add User"} handlePress={this.handlePress(navigation)} option={"create-user"} />
                </View>
                <View style={styles.listItemWrapper}>
                    <LargeListItem title={"View Users"} handlePress={this.handlePress(navigation)} option={"view-users"} />
                </View>
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