import React from 'react';
import { StyleSheet, View, ScrollView } from "react-native";
import InventoryListItem from "../components/InventoryListItem";
import InventoryIconItem from "../components/InventoryIconItem";

const viewType = "list"; //either icon or list view
const handleListItemTouch = nav => data => {
    nav.navigate("ItemOverviewScreen", data);
}
const handleIconItemTouch = nav => data => e => {
    nav.navigate("ItemOverviewScreen", data);
}
const renderItems = (items, nav) => {
    const itemValues = Object.values(items);
    return itemValues.map((data, i) => {
        return viewType === "list" ? <InventoryListItem index={i + 1} length={itemValues.length} handleTouch={handleListItemTouch(nav)} key={`${data.title}-${i}`} data={data} /> : <InventoryIconItem handleTouch={handleIconItemTouch(nav)} key={`${data.title}-${i}`} data={data} title={data.title} />;
    });
}
export default InventoryItemsScreen = ({ navigation }) => {
    const items = navigation.getParam("data", {});
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles["contentContainer" + viewType]}>
                {renderItems(items, navigation)}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerlist: {
    },
    contentContainericon: {
        paddingTop: 30,
        flex: 1,
        flexWrap: "wrap",
        alignContent: "flex-start",
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
});