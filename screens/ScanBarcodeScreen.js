import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import barcodeDataset from "../datasets/barcodeDataset";
/*Screens*/
import ItemOverviewScreen from "./ItemOverviewScreen";
/*Components*/
import ExpoScanner from "../components/ExpoScanner";
const ScanBarcodeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ExpoScanner navigation={navigation} barcodeDataset={barcodeDataset} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default ScanBarcodeStack = createStackNavigator({
    ScanBarcodeScreen: { screen: ScanBarcodeScreen },
    ItemOverviewScreen: { screen: ItemOverviewScreen },
});



