import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Swipeout from 'react-native-swipeout';
/*Components*/
import InventoryListItemSwipeout from "../components/InventoryListItemSwipeout";
//test static data
import testData from "../datasets/testRestockDataset";
class BoxHandlerRestockScreen extends Component {
    state = {
        restockData: testData,
    }
    handleCompletePress = k => {
        console.log("handle complete pressed", k);
    }
    handleOutOfStockPress = k => {
        console.log("out of stock press");
    }
    handleItemTouch = () => {
        console.log("restock item press");
    }
    buildSwipeoutBtns = k => (
        [
            {
                text: "Out of Stock",
                onPress: () => this.handleOutOfStockPress(k),
                color: "white",
                backgroundColor: "red",
            },
            {
                text: "Done",
                onPress: () => this.handleCompletePress(k),
                color: "white",
                backgroundColor: "green",
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
export default BoxHandlerRestockScreen;