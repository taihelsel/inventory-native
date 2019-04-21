import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
/*Components*/
import BackButton from "../components/BackButton";
class ManageUsersScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Manage Users",
            headerLeft: (<BackButton navigation={navigation} dest={"AdminHome"} />)
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>ManageUsersScreen</Text>
            </View>
        );
    }

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
});
export default ManageUsersScreen;