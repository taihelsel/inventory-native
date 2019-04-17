import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
const handlePress = (option, navigation) => e => {
    console.log(navigation.navigate("UserTypeOptions"));
}
export default ShopSelectScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TouchableHighlight style={styles.optionContainer} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handlePress("testshop", navigation)}>
                    <View style={styles.optionContentContainer}>
                        <Text style={styles.optionText}>Test shop</Text>
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