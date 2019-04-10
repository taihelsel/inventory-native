import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
/*Screens*/
import ItemOverviewScreen from "./ItemOverviewScreen";
/*Components*/
import ExpoScanner from "../components/ExpoScanner";
const ScanBarcodeScreen = ({ navigation, inventoryItems }) => {
    return (
        <View style={styles.container}>
            <ExpoScanner navigation={navigation} barcodeDataset={inventoryItems} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const mapStateToProps = (state) => {
    return {
        inventoryItems: state.inventory.inventoryItems,
    }
}

export default ScanBarcodeStack = createStackNavigator({
    ScanBarcodeScreen: {
        screen: connect(mapStateToProps, null)(ScanBarcodeScreen)
    },
    ItemOverviewScreen: { screen: ItemOverviewScreen },
});



