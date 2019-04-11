import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { addRestockItem } from "../actions/restockActions";
import { addCartItem } from "../actions/cartActions";
import { markInventoryInCart, markInventoryInRestock } from "../actions/inventoryActions";
/*Components*/
import HyperLink from "../components/HyperLink";
class ItemOverviewScreen extends Component {
    state = {
        restockBtn: null,
        cartBtn: null,
    }
    componentWillMount() {
        const restockBtn = this.buildRestockBtn(), cartBtn = this.buildCartBtn();
        this.setState({ restockBtn, cartBtn });
    }
    handleRestockPress = (data) => e => {
        const { addRestockItem, markInventoryInRestock } = this.props;
        if (data.inRestock === false) {
            addRestockItem({ data });
            markInventoryInRestock({ inventoryItem: data });
            const restockBtn = this.buildRestockBtn();
            this.setState({ restockBtn });
        }
    }
    handleCartPress = (data) => e => {
        const { addCartItem, markInventoryInCart } = this.props;
        if (data.inCart === false) {
            data.amnt = 1;
            addCartItem({ data });
            markInventoryInCart({ inventoryItem: data });
            const cartBtn = this.buildCartBtn();
            this.setState({ cartBtn });
        }
    }
    buildRestockBtn = () => {
        const { navigation } = this.props, data = navigation.getParam("data", {}), { inRestock } = data,
            styles = {
                container: { flex: 1, backgroundColor: "grey", marginRight: 4, borderRadius: 5, justifyContent: "center" },
                text: { color: "white", textAlign: "center" }
            },
            text = inRestock ? "Remove from Restock" : "Add to Restock";
        styles.container.backgroundColor = inRestock ? "red" : "grey";
        return (
            <TouchableOpacity onPress={this.handleRestockPress(data)} style={styles.container}>
                {<Text style={styles.text}>{text}</Text>}
            </TouchableOpacity>
        );
    }
    buildCartBtn = () => {
        const { navigation } = this.props, data = navigation.getParam("data", {}), { inCart } = data,
            styles = {
                container: { flex: 1, backgroundColor: "grey", marginRight: 4, borderRadius: 5, justifyContent: "center" },
                text: { color: "white", textAlign: "center" }
            },
            text = inCart ? "Remove from Cart" : "Add to Cart";
        styles.container.backgroundColor = inCart ? "red" : "green";
        return (
            <TouchableOpacity onPress={this.handleCartPress(data)} style={styles.container}>
                {<Text style={styles.text}>{text}</Text>}
            </TouchableOpacity>
        );
    }
    hasValidData = (data) => {
        return (typeof data.title !== "undefined" && typeof data.price !== "undefined" && typeof data.desc !== "undefined");
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
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam("data", {});
        if (this.hasValidData(data) === false) return <Text>Error loading item</Text>
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
                        {this.state.restockBtn}
                        {this.state.cartBtn}
                    </View>
                </ScrollView>
            </View>
        );
    }
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
        inventoryItems: state.inventory.inventoryitems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addRestockItem: (content) => { dispatch(addRestockItem(content)) },
        addCartItem: (content) => { dispatch(addCartItem(content)) },
        markInventoryInCart: (content) => { dispatch(markInventoryInCart(content)) },
        markInventoryInRestock: (content) => { dispatch(markInventoryInRestock(content)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemOverviewScreen);