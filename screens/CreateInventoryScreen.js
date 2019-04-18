import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
/*Componenets*/
import BackButton from "../components/BackButton";
class CreateInventoryScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (<BackButton navigation={navigation} />)
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>CreateInventoryScreen</Text>
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
export default CreateInventoryScreen;