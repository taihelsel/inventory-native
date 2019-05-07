import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
const AddMediaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.addImgBtnContainer}>
                <Entypo size={25} style={styles.addImgHeader} name={"images"} />
                <TouchableOpacity style={styles.addImgBtn}>
                    <AntDesign size={55} style={styles.addImgIcon} name={"plussquareo"} />
                </TouchableOpacity>
            </View>
            <View style={styles.selectedImagesContainer}>
                <View style={styles.selectedImage} />
                <View style={styles.selectedImage} />
            </View>
            <View style={styles.addBarcodeBtnContainer}>
                <TouchableOpacity style={styles.addBarcodeBtn}>
                    <FontAwesome name="barcode" size={35} style={styles.addBarcodeIcon} />
                    <Text style={styles.addBarcodeText}>Scan Barcode</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addBarcodeBtnContainer: {
        height: 50,
        marginHorizontal: 35,
        marginTop: 100,
        borderColor: "#44bad4",
        borderStyle: "solid",
        borderRadius: 3,
        borderWidth: 1,
    },
    addBarcodeBtn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    addBarcodeIcon: {
        color: "#44bad4",
        marginLeft: 10,
        position: "absolute",
    },
    addBarcodeText: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        color: "#44bad4",
    },
    selectedImagesContainer: {
        flexDirection: "row",
        height: 75,
        justifyContent: "center",
        alignContent: "center",
        marginTop: 10,
    },
    selectedImage: {
        backgroundColor: "grey",
        height: "100%",
        width: 75,
        marginHorizontal: 3,
        borderRadius: 3,
    },
    addImgBtnContainer: {
        backgroundColor: "#44bad4",
        height: 200,
        marginHorizontal: 35,
        marginTop: 50,
        borderRadius: 1,
    },
    addImgHeader: {
        color: "rgba(255,255,255,0.85)",
        position: "absolute",
        top: 15,
        left: 15,
    },
    addImgBtn: {
        flex: 1,
        justifyContent: "center",
    },
    addImgIcon: {
        color: "snow",
        textAlign: "center",
    }
});

export default AddMediaScreen;