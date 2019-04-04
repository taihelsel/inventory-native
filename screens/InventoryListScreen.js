import React from 'react';
import { StyleSheet, View, Text } from "react-native";
export default class InventoryListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Inventory List Screen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
    }
});