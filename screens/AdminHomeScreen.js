import React from "react";
import { View, Text, StyleSheet } from "react-native";
/*Components*/
import LargeListItem from "../components/LargeListItem";
const testInventoryData = {
    "0000000": {
        title: "test title",
        price: {
            min: 0,
            max: 5,
        },
        desc: [
            "test desc",
            "magical desc test",
            "amazing super awesome desc",
        ],
        category: "test cat",
        manufacturer: "test manu",
        barcode: "0000000",
    }
};
const handlePress = navigation => option => {
    switch (option) {
        case "manage-inventory": {
            navigation.navigate("ManageInventory", { data: { items: testInventoryData, dest: "ManageItem" } });
            break;
        }
        case "manage-users": {
            navigation.navigate("ManageUsers");
            break;
        }
        default: {
            console.log("error: item not found in admin navigation");
            break;
        }
    }
}
const AdminHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.listItemWrapper}>
                <LargeListItem title={"Manage Inventory"} handlePress={handlePress(navigation)} option={"manage-inventory"} />
            </View>
            <View style={styles.listItemWrapper}>
                <LargeListItem title={"Manage Users"} handlePress={handlePress(navigation)} option={"manage-users"} />
            </View>
        </View>
    );
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
export default AdminHomeScreen;