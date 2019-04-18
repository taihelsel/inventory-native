import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const LargeListItem = ({ handlePress, option, title }) => {
    return (
        <TouchableHighlight style={styles.container} underlayColor="transparent" onPress={handlePress(option)}>
            <View style={styles.contentContainer}>
                <Text style={styles.label}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
};
const styles = StyleSheet.create({
    container: {
    },
    contentContainer: {
        height: 100,
        justifyContent: "center",
        backgroundColor: "orange",
    },
    label: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
    }
});
export default LargeListItem;