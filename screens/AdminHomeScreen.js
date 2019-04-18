import React from "react";
import { View, Text, StyleSheet } from "react-native";
/*Components*/
import LargeListItem from "../components/LargeListItem";
const handlePress = option => e => {
    console.log("option", option);
}
const AdminHomeScreen = () => {
    return (
        <View style={styles.container}>
            <LargeListItem title={"Manage Inventory"} handlePress={handlePress} option={"manage-inventory"} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
});
export default AdminHomeScreen;