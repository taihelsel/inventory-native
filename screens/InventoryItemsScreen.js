import React from 'react';
import { StyleSheet, View, ScrollView } from "react-native";
import InventoryListItem from "../components/InventoryListItem";
import InventoryIconItem from "../components/InventoryIconItem";
export default class InventoryItemsScreen extends React.Component {
    state = {
        viewType: "list", // either icon or list view
    }
    handleItemTouch = data => {
        this.props.navigation.navigate("ItemOverviewScreen");
    }
    renderItems = (items) => {
        return Object.values(items).map((data, i) => {
            return this.state.viewType === "list" ? <InventoryListItem handleTouch={this.handleItemTouch} key={`${data.title}-${i}`} data={data} /> : <InventoryIconItem handleTouch={this.handleItemTouch} key={`${data.title}-${i}`} data={data} title={data.title} />;
        });
    }
    render() {
        const { navigation } = this.props;
        const items = navigation.getParam("data", {});
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles["contentContainer" + this.state.viewType]}>
                    {this.renderItems(items)}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerlist: {
        paddingTop: 30,
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