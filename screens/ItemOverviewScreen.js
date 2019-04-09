import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addRestockItem } from "../actions/restockActions";
/*Components*/
import HyperLink from "../components/HyperLink";
const hasValidData = (data) => {
    return (typeof data.title !== "undefined" && typeof data.price !== "undefined" && typeof data.desc !== "undefined");
}
const handleCartPress = e => {
    console.log("add to cart");
}
const handleRestockPress = (data, addRestockItem) => e => {
    addRestockItem({ data });
}
const ItemOverviewScreen = ({ navigation, addRestockItem }) => {
    const data = navigation.getParam("data", {});
    const isBarcodeData = navigation.getParam("isBarcodeData", false);
    if (hasValidData(data) === false) return <Text>Error loading item</Text>
    const { title, price, desc } = data;
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{ height: 200, marginHorizontal: 75, backgroundColor: "orange" }}>
                    <Text>IMG HERE</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
                {isBarcodeData ? <Text style={styles.price}>By {data.manufacturer}</Text> : null}
                <Text style={styles.price}>{`$${price.min} - $${price.max}`}</Text>
                {isBarcodeData ? <HyperLink styles={{ ...styles.price, color: "#4e4eff", marginTop: 10, }} title={"Demo Video"} url={data.videoLink} /> : null}
                <View style={styles.descriptionContainer}>
                    {desc.map((item, i) => {
                        return <Text style={styles.descriptionText} key={`${item}-${i}`}>• {item}</Text>
                    })}
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 25, height: 50, marginTop: 75 }}>
                    <TouchableOpacity onPress={handleRestockPress(data, addRestockItem)} style={{ flex: 1, backgroundColor: "grey", marginRight: 4, borderRadius: 5, justifyContent: "center" }}>
                        <Text style={{ color: "white", textAlign: "center", }}>Add to Restock</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCartPress} style={{ flex: 1, backgroundColor: "green", marginLeft: 4, borderRadius: 5, justifyContent: "center" }}>
                        <Text style={{ color: "white", textAlign: "center", }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 15,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 5,
    },
    price: {
        fontSize: 25,
        textAlign: "center"
    },
    descriptionContainer: {
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 30,
        marginHorizontal: 25,
        paddingHorizontal: 12,
        paddingVertical: 7.5
    },
    descriptionText: {
        fontSize: 15,
        marginVertical: 2,
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        addRestockItem: (content) => { dispatch(addRestockItem(content)) },
    }
}

export default connect(null, mapDispatchToProps)(ItemOverviewScreen);