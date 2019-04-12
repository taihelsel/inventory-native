import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, TextInput, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
export default class InventoryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amnt: this.props.data.amnt,
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
    renderScreenSpecificItems = () => {
        if (this.props.isCartView === true) {
            return (
                <View style={{ width: 50, justifyContent: "center", paddingRight: 15, }}>
                    <TextInput style={{ height: 50, borderWidth: 1, borderColor: "grey", borderStyle: "solid", textAlign: "center" }} keyboardType="number-pad" onChangeText={this.handleAmntInput} value={this.state.amnt.toString()} />
                </View>
            );
        }
        if (this.props.isInventoryView === true) {
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
                    <TouchableHighlight >
                        <View style={styles.button}>
                            <MaterialCommunityIcons name="playlist-plus" size={40} style={{ color: "grey", textAlign: "center", marginLeft: 7 }} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight >
                        <View style={styles.button}>
                            <FontAwesome name="cart-plus" size={35} style={{ color: "grey", textAlign: "center" }} />
                        </View>
                    </TouchableHighlight>
                </View>
            );
        }
    }
    renderImg = img => {
        const baseStyle = { justifyContent: "center", width: 80, marginLeft: 8 };
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
                        <Text style={[styles.detailsText, styles.priceText]}>{`$${data.price.min} - $${data.price.max}`}</Text>
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