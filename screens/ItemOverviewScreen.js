import React from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
export default class InventoryItemsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text>
                        Item Overview
                    </Text>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 30,
    },
});