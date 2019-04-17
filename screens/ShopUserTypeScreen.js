import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
const handlePress = (option, navigation) => e => {
    if (option === "clerk") navigation.navigate("Clerk");
    if (option === "box-handler") navigation.navigate("BoxHandler");
    if (option === "admin") console.log("need to create admin screen");
}
export default ShopUserTypeScreen = ({ navigation }) => {
    const data = navigation.getParam("data", {});
    const { shopId, group } = data;
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TouchableHighlight style={styles.optionContainer} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handlePress("clerk", navigation)}>
                    <View style={styles.optionContentContainer}>
                        <Text style={styles.optionText}>Clerk</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.optionContainer} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handlePress("box-handler", navigation)}>
                    <View style={styles.optionContentContainer}>
                        <Text style={styles.optionText}>Box Handler</Text>
                    </View>
                </TouchableHighlight>
                {group === "admin" ? (
                    <TouchableHighlight style={styles.optionContainer} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handlePress("admin", navigation)}>
                        <View style={styles.optionContentContainer}>
                            <Text style={styles.optionText}>Admin</Text>
                        </View>
                    </TouchableHighlight>
                ) : null}
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