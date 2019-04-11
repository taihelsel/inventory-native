import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { addRestockItem, deleteRestockItem } from "../actions/restockActions";
import { addCartItem, deleteCartItem } from "../actions/cartActions";
/*Components*/
import HyperLink from "../components/HyperLink";
class ItemOverviewScreen extends Component {
    state = {
        inRestock: false,
        inCart: false,
    }
    componentWillMount() {
        const { restockData, cartData, navigation } = this.props;
        const data = navigation.getParam("data", {}), { barcode } = data;
        const inRestock = typeof restockData[barcode] === "undefined" ? false : true;
        const inCart = typeof cartData[barcode] === "undefined" ? false : true;
        this.setState({ inCart, inRestock });
    }
    componentDidUpdate(prevProps) {
        const { restockData, cartData, navigation } = this.props;
        const oldRestock = prevProps.restockData, oldCart = prevProps.cartData;
        const data = navigation.getParam("data", {}), { barcode } = data;
        if (JSON.stringify(oldRestock[barcode]) !== JSON.stringify(restockData[barcode])) {
            const inRestock = typeof restockData[barcode] === "undefined" ? false : true;
            this.setState({ inRestock });
        }
        if (JSON.stringify(oldCart[barcode]) !== JSON.stringify(cartData[barcode])) {
            const inCart = typeof cartData[barcode] === "undefined" ? false : true;
            this.setState({ inCart });
        }
    }
    handleRestockPress = (data) => e => {
        const { addRestockItem, restockData, deleteRestockItem } = this.props, { barcode } = data, inRestock = typeof restockData[barcode] === "undefined" ? false : true;
        if (inRestock === false) {
            //adding item to restock
            addRestockItem({ data });
        } else {
            //removing item from restock
            let clonedRestockData = { ...restockData };
            delete clonedRestockData[barcode];
            deleteRestockItem({ restockData: clonedRestockData });
        }
        //updating component
        this.setState({ inRestock: !inRestock });
    }
    handleCartPress = (data) => e => {
        const { addCartItem, deleteCartItem, cartData } = this.props, { barcode } = data, inCart = typeof cartData[barcode] === "undefined" ? false : true;
        if (inCart === false) {
            data.amnt = 1;
            addCartItem({ data });
        } else {
            let clonedCartData = { ...cartData };
            delete clonedCartData[barcode];
            deleteCartItem({ cartData: clonedCartData });
        }
        //updating component
        this.setState({ inCart: !inCart });
    }
    buildRestockBtn = () => {
        const { navigation } = this.props, data = navigation.getParam("data", {}),
            styles = {
                container: { flex: 1, backgroundColor: this.state.inRestock ? "red" : "grey", marginRight: 4, borderRadius: 5, justifyContent: "center" },
                text: { color: "white", textAlign: "center" }
            },
            text = this.state.inRestock ? "Remove from Restock" : "Add to Restock";
        return (
            <TouchableOpacity onPress={this.handleRestockPress(data)} style={styles.container}>
                {<Text style={styles.text}>{text}</Text>}
            </TouchableOpacity>
        );
    }
    buildCartBtn = () => {
        const { navigation } = this.props, data = navigation.getParam("data", {}),
            styles = {
                container: { flex: 1, backgroundColor: this.state.inCart ? "red" : "green", marginRight: 4, borderRadius: 5, justifyContent: "center" },
                text: { color: "white", textAlign: "center" }
            },
            text = this.state.inCart ? "Remove from Cart" : "Add to Cart";
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
                        {this.buildRestockBtn()}
                        {this.buildCartBtn()}
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
        inventoryItems: state.inventory.inventoryItems,
        restockData: state.restock.restockData,
        cartData: state.cart.cartData,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addRestockItem: (content) => { dispatch(addRestockItem(content)) },
        deleteRestockItem: (content) => { dispatch(deleteRestockItem(content)) },
        addCartItem: (content) => { dispatch(addCartItem(content)) },
        deleteCartItem: (content) => { dispatch(deleteCartItem(content)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemOverviewScreen);