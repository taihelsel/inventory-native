import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
/*Components*/
import InventoryListItem from "../components/InventoryListItem";
import InventoryIconItem from "../components/InventoryIconItem";

const viewType = "list"; //either icon or list view
const handleListItemTouch = (nav, dest) => data => {
    nav.navigate(dest, data);
}
const handleIconItemTouch = (nav, dest) => data => e => {
    nav.navigate(dest, data);
}
const renderItems = (items, nav, dest, referer) => {
    const itemValues = Array.isArray(items) === false ? Object.values(items) : items;
    return itemValues.map((data, i) => {
        return viewType === "list" ? <InventoryListItem isInventoryView={referer === "InventoryOverview"} index={i + 1} length={itemValues.length} handleTouch={handleListItemTouch(nav, dest)} key={`${data.title}-${i}`} data={data} /> : <InventoryIconItem handleTouch={handleIconItemTouch(nav)} key={`${data.title}-${i}`} data={data} title={data.title} />;
    });
}
export default InventoryItemsScreen = ({ navigation }) => {
    /*           
    data should contain:
        items: an object containing data to be displayed,
        dest: where to navigate to when item is clicked,
        referer: the previous screen
    */
    const data = navigation.getParam("data", false);
    if (data === false) {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles["contentContainer" + viewType]}>
                    <Text>Error getting list data</Text>
                </ScrollView>
            </View>
        );
    }
    let { items, dest, referer } = data;
    console.log(items);
    const fallbackDest = "ItemOverviewScreen";
    if (typeof dest === "undefined") {
        console.log("dest provided was undefined. Navigating to fallback dest");
        dest = fallbackDest;
    }
    return Object.keys(items).length ? (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles["contentContainer" + viewType]}>
                {renderItems(items, navigation, dest, referer)}
            </ScrollView>
        </View>
    ) : (
            <Text style={{ textAlign: "center", fontSize: 22 }}>No items found</Text>
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