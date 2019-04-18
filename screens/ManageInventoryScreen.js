import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ManageInventoryScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ManageInventoryScreen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
});
export default ManageInventoryScreen;