import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddDescriptionScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Add Description Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AddDescriptionScreen;