import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
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
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: (
                <TouchableHighlight style={{ paddingBottom: 5, paddingHorizontal: 25 }} underlayColor="transparent" onPress={() => { navigation.goBack() }}>
                    <Ionicons size={48} style={{ flex: 1, textAlign: "center", color: "grey" }} name={"ios-arrow-round-back"} />
                </TouchableHighlight>
            )
        })
    }
);



