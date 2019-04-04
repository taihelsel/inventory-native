import React from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import InventoryListItem from "../components/InventoryListItem";
export default class InventoryListScreen extends React.Component {
    state = {
        viewType: "list", // either icon or list view
    }
    renderItems = (items) => {
        return Object.values(items).map((data, i) => {
            return this.state.viewType === "list" ? <InventoryListItem key={`${data.title}-${i}`} data={data} /> : "RENDER ICON VIEW";
        });
    }
    render() {
        const { navigation } = this.props;
        const items = navigation.getParam("data", {});
        return (
            <View style={styles.container}>
                <ScrollView style={styles.contentContainer}>
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
    contentContainer: {
        paddingTop: 30,
        flex: 1,
    },
});