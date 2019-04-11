import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, TextInput, Image } from "react-native";
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
    dynamicStyle = () => {
        const styles = {};
        const { index } = this.props;
        if (index % 2 === 0) styles.backgroundColor = "rgba(128, 128, 128, 0.25)";
        else styles.backgroundColor = "rgba(128, 128, 128, 0.1)";
        return styles;
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
    }
    renderImg = img => {
        if (typeof img === "undefined") {
            return (
                <View style={{ height: 80, width: 80, backgroundColor: "orange", }}>
                    <Text>Err displaying image</Text>
                </View>
            );
        }
        return (
            <View style={{ height: 80, width: 80, }}>
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
                <View style={[styles.container, this.dynamicStyle()]}>
                    {this.renderImg(img)}
                    <View style={{ flex: 1, paddingLeft: 15, justifyContent: "center" }} >
                        <Text style={[styles.detailsText, { fontSize: 28, fontWeight: "bold", color: "black", marginBottom: 5 }]}>{data.title}</Text>
                        <Text style={[styles.detailsText, { color: "green" }]}>{`$${data.price.min} - $${data.price.max}`}</Text>
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
        marginVertical: 0.2
    },
    detailsText: {
        textAlign: "center"
    }
});