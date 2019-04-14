import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Swipeout from 'react-native-swipeout';
/*Components*/
import InventoryListItem from "../components/InventoryListItem";
//test static data
import testData from "../datasets/testRestockDataset";
class BoxHandlerRestockScreen extends Component {
    state = {
        restockData: testData,
    }
    handleCompletePress(k) {
        console.log("handle complete pressed");
    }
    handleItemTouch() {
        console.log("restock item press");
    }
    buildRestockList() {
        const { restockData } = this.state;
        const keys = Object.keys(restockData);
        const restockList = keys.map((k, i) => {
            const data = restockData[k];
            const swipeoutBtns = [{
                text: "Mark as complete",
                onPress: () => this.handleCompletePress(k),
                color: "white",
                backgroundColor: "green",
            }];
            return (
                <Swipeout backgroundColor="transparent" right={swipeoutBtns} buttonWidth={90} key={`${data.title}-${i}`} >
                    <InventoryListItem index={i + 1} handleTouch={this.handleItemTouch} data={data} />
                </Swipeout>
            )
        });
        return restockList;
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {this.buildRestockList()}
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