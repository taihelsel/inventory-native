import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddLabelsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Add Labels Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AddLabelsScreen;