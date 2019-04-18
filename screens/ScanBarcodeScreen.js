import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
/*Screens*/
import ItemOverviewScreen from "./ItemOverviewScreen";
/*Components*/
import ExpoScanner from "../components/ExpoScanner";
const onScan = (navigation, handleBarcodeScan, inventoryItems) => data => {
    if (typeof handleBarcodeScan !== "undefined") {
        handleBarcodeScan(data);
    } else {
        navigation.navigate("ItemOverviewScreen", { data: inventoryItems[barcodeID] });
    }
}
const ScanBarcodeScreen = ({ navigation, inventoryItems }) => {
    const data = navigation.getParam("data", {});
    const { handleBarcodeScan } = data;
    return (
        <View style={styles.container}>
            <ExpoScanner onScan={onScan(navigation, handleBarcodeScan, inventoryItems)} navigation={navigation} />
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
        screen: connect(mapStateToProps, null)(ScanBarcodeScreen),
        navigationOptions: {
            header: null,
        }
    },
    ItemOverviewScreen: {
        screen: ItemOverviewScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <TouchableHighlight style={{ paddingBottom: 5, paddingHorizontal: 25 }} underlayColor="transparent" onPress={() => { navigation.goBack() }}>
                    <Ionicons size={48} style={{ flex: 1, textAlign: "center", color: "grey" }} name={"ios-arrow-round-back"} />
                </TouchableHighlight>
            )
        }),
    }
});