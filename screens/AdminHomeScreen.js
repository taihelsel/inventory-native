import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
/*Components*/
import LargeListItem from "../components/LargeListItem";

const handlePress = (navigation, items) => option => {
    switch (option) {
        case "manage-inventory": {
            navigation.navigate("ManageInventory", { data: { items, dest: "ManageItem" } });
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
const AdminHomeScreen = ({ navigation, inventory }) => {
    return (
        <View style={styles.container}>
            <View style={styles.listItemWrapper}>
                <LargeListItem title={"Manage Inventory"} handlePress={handlePress(navigation, inventory)} option={"manage-inventory"} />
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
const mapStateToProps = ({ inventory }) => ({
    inventory: inventory.inventoryItems
});
export default connect(mapStateToProps, null)(AdminHomeScreen);