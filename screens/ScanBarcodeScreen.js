import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import barcodeDataset from "../datasets/barcodeDataset";
/*Screens*/
import ItemOverviewScreen from "./ItemOverviewScreen";
/*Components*/
import ExpoScanner from "../components/ExpoScanner";
class ScanBarcodeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ExpoScanner navigation={this.props.navigation} barcodeDataset={barcodeDataset} />
            </View>
        );
    }
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



