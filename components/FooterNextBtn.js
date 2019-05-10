import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FooterNextBtn = ({ handleNextPress }) => {
    return (
        <View style={styles.nextButtonContainer}>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    nextButtonContainer: {
        height: 40,
        borderRadius: 3,
        backgroundColor: "green",
        marginHorizontal: 20,
        marginTop: 10,
    },
    nextButton: {
        flex: 1,
        justifyContent: "center",
    },
    nextButtonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "500",
    },
});

export default FooterNextBtn;