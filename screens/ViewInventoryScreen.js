import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
/*Componenets*/
import BackButton from "../components/BackButton";
class ViewInventoryScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Inventory",
            headerLeft: (<BackButton navigation={navigation} />)
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>ViewInventoryScreen</Text>
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
export default ViewInventoryScreen;