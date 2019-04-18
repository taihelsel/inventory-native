import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ManageUsersScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ManageUsersScreen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
});
export default ManageUsersScreen;