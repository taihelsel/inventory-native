import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { addRestockItem, deleteRestockItem } from "../actions/restockActions";
import { addCartItem, deleteCartItem } from "../actions/cartActions";
class InventoryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amnt: this.props.data.amnt,
            inRestock: false,
            inCart: false,
        }
    }
    componentWillMount() {
        if (this.props.isInventoryView === true) {
            const { restockData, cartData, data } = this.props, { barcode } = data;
            const inRestock = typeof restockData[barcode] === "undefined" ? false : true;
            const inCart = typeof cartData[barcode] === "undefined" ? false : true;
            this.setState({ inCart, inRestock });
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.isInventoryView === true) {
            const { restockData, cartData, data } = this.props, { barcode } = data;
            const oldRestock = prevProps.restockData, oldCart = prevProps.cartData;
            if (JSON.stringify(oldRestock[barcode]) !== JSON.stringify(restockData[barcode])) {
                const inRestock = typeof restockData[barcode] === "undefined" ? false : true;
                this.setState({ inRestock });
            }
            if (JSON.stringify(oldCart[barcode]) !== JSON.stringify(cartData[barcode])) {
                const inCart = typeof cartData[barcode] === "undefined" ? false : true;
                this.setState({ inCart });
            }
        }
    }
    handleTouch = e => {
        this.props.handleTouch({ data: this.props.data });
    }
    handleAmntInput = txt => {
        const { barcode } = this.props.data;
        if (parseInt(txt) >= 0) {
            this.props.updateCartTotal(barcode, txt);
            this.setState({
                amnt: parseInt(txt),
            });
        } else {
            this.props.updateCartTotal(barcode, 0);
            this.setState({
                amnt: parseInt(0),
            });
        }
    }
    handleRestockBtnPress = () => {
        const { addRestockItem, restockData, deleteRestockItem, data } = this.props, { barcode } = data, inRestock = typeof restockData[barcode] === "undefined" ? false : true;
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
    handleCartBtnPress = () => {
        const { addCartItem, deleteCartItem, cartData, data } = this.props, { barcode } = data, inCart = typeof cartData[barcode] === "undefined" ? false : true;
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
    renderScreenSpecificItems = () => {
        if (this.props.isCartView === true) {
            return (
                <View style={{ width: 50, justifyContent: "center", paddingRight: 15, }}>
                    <TextInput style={{ height: 50, borderWidth: 1, borderColor: "grey", borderStyle: "solid", textAlign: "center" }} keyboardType="number-pad" onChangeText={this.handleAmntInput} value={this.state.amnt.toString()} />
                </View>
            );
        }
        if (this.props.isInventoryView === true) {
            const { inCart, inRestock } = this.state;
            const styles = {
                container: {
                    width: 80,
                    paddingRight: 5,
                },
                button: {
                    marginVertical: 2,
                }
            };
            return (
                <View style={styles.container}>
                    <TouchableHighlight onPress={this.handleRestockBtnPress} underlayColor="transparent">
                        <View style={styles.button}>
                            {inRestock ? <MaterialCommunityIcons name="playlist-remove" size={40} style={{ color: "red", textAlign: "center", marginLeft: 7 }} /> : <MaterialCommunityIcons name="playlist-plus" size={40} style={{ color: "grey", textAlign: "center", marginLeft: 7 }} />}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.handleCartBtnPress} underlayColor="transparent" >
                        <View style={styles.button}>
                            {inCart ? <MaterialIcons name="remove-shopping-cart" size={35} style={{ color: "red", textAlign: "center" }} /> : <FontAwesome name="cart-plus" size={35} style={{ color: "grey", textAlign: "center" }} />}
                        </View>
                    </TouchableHighlight>
                </View>
            );
        }
    }
    renderImg = img => {
        const baseStyle = { justifyContent: "center", minHeight: 80, width: 80, marginLeft: 8 };
        if (typeof img === "undefined") {
            return (
                <View style={[baseStyle, { backgroundColor: "orange", }]}>
                    <Text>Err displaying image</Text>
                </View>
            );
        }
        return (
            <View style={baseStyle}>
                <Image style={{
                    flex: 1,
                    resizeMode: 'contain'
                }} source={{ uri: img }} />
            </View>
        );
    }
    render() {
        const { data, isCartView, isRestockView } = this.props;
        const dynamicUnderlayColor = isCartView || isRestockView ? "transparent" : "rgba(212, 212, 212, 0.25)";
        const { img } = data;
        return (
            <TouchableHighlight onPress={this.handleTouch} underlayColor={dynamicUnderlayColor}>
                <View style={styles.container}>
                    {this.renderImg(img)}
                    <View style={{ flex: 1, paddingLeft: 15, justifyContent: "center" }} >
                        <Text style={[styles.detailsText, styles.titleText]}>{data.title}</Text>
                        {typeof data.price !== "undefined" ? <Text style={[styles.detailsText, styles.priceText]}>{`$${data.price.min} - $${data.price.max}`}</Text> : null}
                    </View>
                    {this.renderScreenSpecificItems()}
                </View >
            </TouchableHighlight >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignContent: "flex-start",
        marginVertical: 0.2,
        backgroundColor: "white",
        borderColor: "rgba(35,35,35,0.15)",
        borderBottomWidth: 0.5,
        borderStyle: "solid",
        paddingVertical: 8,
    },
    detailsText: {
        textAlign: "left"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        marginBottom: 5
    },
    priceText: {
        color: "green"
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

export default connect(mapStateToProps, mapDispatchToProps)(InventoryListItem);