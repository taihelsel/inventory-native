import React from 'react';
import { StyleSheet, View, Text } from "react-native";
export default class InventoryListScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const items = navigation.getParam("data", {});
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(items)}</Text>
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