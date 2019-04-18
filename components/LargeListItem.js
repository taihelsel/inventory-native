import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const onPress = (handlePress, option) => e => {
    if (typeof option !== "undefined") {
        handlePress(option);
    } else handlePress();
}
const LargeListItem = ({ handlePress, option, title, parentStyle }) => {
    const allStyle = typeof parentStyle === "undefined" ? { ...styles.contentContainer } : { ...styles.contentContainer, ...parentStyle };
    return (
        <TouchableHighlight style={styles.container} underlayColor="transparent" onPress={onPress(handlePress, option)}>
            <View style={allStyle}>
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
        backgroundColor: "#44bad4",
    },
    label: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
    }
});
export default LargeListItem;