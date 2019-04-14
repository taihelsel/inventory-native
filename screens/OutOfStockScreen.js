import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
/*Components*/
import InventoryListItemSwipeout from "../components/InventoryListItemSwipeout";
//test data
import testDataset from "../datasets/testRestockDataset";

class OutOfStockScreen extends Component {
    state = {
        restockData: testDataset,
    };
    handleDeletePress = k => {
        console.log("delete button touched");
    }
    handleItemTouch = () => {
        console.log("item touched");
    }
    buildSwipeoutBtns = k =>  (
        [
            {
                type: "delete",
                text: "Delete",
                onPress: () => this.handleDeletePress(k),
                color: "white",
                backgroundColor: "red",
            },
        ]
    );
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <InventoryListItemSwipeout buildSwipeoutBtns={this.buildSwipeoutBtns} handlePress={this.handleItemTouch} data={this.state.restockData} />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    contentContainer: {
    }
});
export default OutOfStockScreen;