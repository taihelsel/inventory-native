import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddPriceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Add Price Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AddPriceScreen;