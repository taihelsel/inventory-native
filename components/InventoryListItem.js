import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from "react-native";
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
        const { length, index } = this.props;
        if (index % 2 === 0) styles.backgroundColor = "rgba(128, 128, 128, 0.25)";
        else styles.backgroundColor = "rgba(128, 128, 128, 0.1)";
        return styles;
    }
    handleAmntInput = txt => {
        if (parseInt(txt) >= 0) {
            this.props.updateCartTotal(this.props.index, txt);
            this.setState({
                amnt: parseInt(txt),
            });
        } else {
            this.props.updateCartTotal(this.props.index, 0);
            this.setState({
                amnt: parseInt(0),
            });
        }
    }
    renderScreenSpecificItems = () => {
        let items = null;
        if (this.props.isCartView === true) {
            items = (
                <View style={{ width: 50, justifyContent: "center", paddingRight: 15, }}>
                    <TextInput style={{ height: 50, borderWidth: 1, borderColor: "grey", borderStyle: "solid", textAlign: "center" }} keyboardType="number-pad" onChangeText={this.handleAmntInput} value={this.state.amnt.toString()} />
                </View>
            );
        }
        if (this.props.isRestockView === true) return <Text>render retock buttons here</Text>
        return items;
    }
    render() {
        const { data } = this.props;
        return (
            <TouchableHighlight onPress={this.handleTouch}>
                <View style={[styles.container, this.dynamicStyle()]}>
                    <View style={{ height: 80, width: 80, backgroundColor: "orange", }}>
                        <Text>IMG HERE</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 15, justifyContent: "center" }} >
                        <Text style={[styles.detailsText, { fontSize: 28, fontWeight: "bold", color: "black", marginBottom: 5 }]}>{data.title}</Text>
                        <Text style={[styles.detailsText, { color: "green" }]}>{`$${data.price.min} - $${data.price.max}`}</Text>
                    </View>
                    {this.renderScreenSpecificItems()}
                </View >
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignContent: "flex-start",
    },
    detailsText: {
        textAlign: "center"
    }
});