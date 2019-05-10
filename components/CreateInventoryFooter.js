import React from "react";
import { View, Text, StyleSheet } from "react-native";
/*Components*/
import FooterNextBtn from "./FooterNextBtn";
const PageIcon = ({ pageNumber, active }) => {
    const pageIconStyle = active === true ? { ...styles.pageIcon, backgroundColor: "#44bad4", } : styles.pageIcon;
    return (
        <View style={pageIconStyle}>
            <Text style={styles.pageIconText}>{pageNumber}</Text>
        </View>
    );
}
const IconDivider = () => {
    return <View style={styles.iconDivider} />
}
const CreateInventoryFooter = ({ handleNextPress }) => {
    return (
        <View style={styles.container}>
            <FooterNextBtn handleNextPress={handleNextPress} />
            <View style={styles.pageIconWrapper}>
                <PageIcon active={true} pageNumber={1} />
                <IconDivider />
                <IconDivider />
                <PageIcon pageNumber={2} />
                <IconDivider />
                <IconDivider />
                <PageIcon pageNumber={3} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 150,
        borderStyle: "solid",
        borderTopWidth: 0.5,
        borderColor: "grey",
    },
    pageIconWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 15,
    },
    pageIcon: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 100,
        backgroundColor: "#d2d2d2",
    },
    pageIconText: {
        color: "white",
        fontSize: 15,
    },
    iconDivider: {
        width: 5,
        height: 5,
        marginHorizontal: 3,
        borderRadius: 100,
        backgroundColor: "#d2d2d2",
        alignSelf: "center",
    },
});

export default CreateInventoryFooter;