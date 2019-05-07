import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
const AddMediaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.addImgContainer}>
                <Entypo size={25} style={styles.addImgHeader} name={"images"} />
                <TouchableOpacity style={styles.addImgBtn}>
                    <AntDesign size={55} style={styles.addImgIcon} name={"plussquareo"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addImgContainer: {
        backgroundColor: "#44bad4",
        height: 200,
        marginHorizontal: 35,
    },
    addImgHeader: {
        color: "white",
        position: "absolute",
        top: 15,
        left: 15,
    },
    addImgBtn: {
        flex: 1,
        justifyContent: "center",
    },
    addImgIcon: {
        color: "white",
        textAlign: "center",
    }
});

export default AddMediaScreen;