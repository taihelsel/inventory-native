import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
const handlePress = option => {
    console.log("item pressed");
}
export default ShopUserTypeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TouchableHighlight style={styles.optionContainer} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handlePress("clerk")}>
                    <View style={styles.optionContentContainer}>
                        <Text style={styles.optionText}>Clerk</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.optionContainer} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handlePress("box-handler")}>
                    <View style={styles.optionContentContainer}>
                        <Text style={styles.optionText}>Box Handler</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.optionContainer} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handlePress("admin")}>
                    <View style={styles.optionContentContainer}>
                        <Text style={styles.optionText}>Admin</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    contentContainer: {
        height: 125,
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
    },
    optionContainer: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: "orange",
    },
    optionContentContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "orange",
    },
    optionText: {
        textAlign: "center",
        color: "white"
    }
});