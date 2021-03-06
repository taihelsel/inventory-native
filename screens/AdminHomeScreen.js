import React from "react";
import { View, StyleSheet } from "react-native";
/*Components*/
import LargeListItem from "../components/LargeListItem";

const handlePress = (navigation) => option => {
    switch (option) {
        case "manage-inventory": {
            navigation.navigate("ManageInventory", { data: { items: false, dest: "ManageItem" } });
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