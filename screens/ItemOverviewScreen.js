import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { addRestockItem } from "../actions/restockActions";
import { addCartItem } from "../actions/cartActions";
/*Components*/
import HyperLink from "../components/HyperLink";
const hasValidData = (data) => {
    return (typeof data.title !== "undefined" && typeof data.price !== "undefined" && typeof data.desc !== "undefined");
}
const handleCartPress = (data, cartData, addCartItem) => e => {
    if (checkIfInData(data, cartData) === false) {
        data.amnt = 1;
        addCartItem({ data });
    }
}
const handleRestockPress = (data, restockData, addRestockItem) => e => {
    if (checkIfInData(data, restockData) === false) addRestockItem({ data });
}
const checkIfInData = (toCheck, data) => {
    let isInData = false;
    for (let i = 0; i < data.length; i++) {
        const x = data[i];
        if (x.title === toCheck.title) isInData = true;
    }
    return isInData;
}
renderImg = img => {
    if (typeof img === "undefined") {
        return (
            <View style={{ height: 200, marginHorizontal: 75, backgroundColor: "orange" }}>
                <Text>Err displaying image</Text>
            </View>
        );
    }
    return (
        <View style={{ height: 200, marginHorizontal: 75 }}>
            <Image style={{
                flex: 1,
                resizeMode: 'contain'
            }} source={{ uri: img }} />
        </View>
    );
}
const ItemOverviewScreen = ({ navigation, addRestockItem, restockData, addCartItem, cartData }) => {
    const data = navigation.getParam("data", {});
    if (hasValidData(data) === false) return <Text>Error loading item</Text>
    const { title, price, desc, img, manufacturer, videoLink } = data;
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.renderImg(img)}
                <Text style={styles.title}>{title}</Text>
                {typeof manufacturer !== "undefined" ? <Text style={styles.price}>By {manufacturer}</Text> : null}
                <Text style={styles.price}>{`$${price.min} - $${price.max}`}</Text>
                {typeof videoLink !== "undefined" ? <HyperLink styles={{ ...styles.price, color: "#4e4eff", marginTop: 10, }} title={"Demo Video"} url={videoLink} /> : null}
                <View style={styles.descriptionContainer}>
                    {desc.map((item, i) => {
                        return <Text style={styles.descriptionText} key={`${item}-${i}`}>• {item}</Text>
                    })}
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 25, height: 50, marginTop: 75 }}>
                    <TouchableOpacity onPress={handleRestockPress(data, restockData, addRestockItem)} style={{ flex: 1, backgroundColor: "grey", marginRight: 4, borderRadius: 5, justifyContent: "center" }}>
                        <Text style={{ color: "white", textAlign: "center", }}>Add to Restock</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCartPress(data, cartData, addCartItem)} style={{ flex: 1, backgroundColor: "green", marginLeft: 4, borderRadius: 5, justifyContent: "center" }}>
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
const mapStateToProps = (state) => {
    return {
        restockData: state.restock.restockData,
        cartData: state.cart.cartData,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addRestockItem: (content) => { dispatch(addRestockItem(content)) },
        addCartItem: (content) => { dispatch(addCartItem(content)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemOverviewScreen);