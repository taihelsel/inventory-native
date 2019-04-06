import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, TextInput } from "react-native";
import Swipeout from 'react-native-swipeout';
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
        if (this.props.isCartView === true) {
            return (
                <View style={{ width: 50, justifyContent: "center", paddingRight: 15, }}>
                    <TextInput style={{ height: 50, borderWidth: 1, borderColor: "grey", borderStyle: "solid", textAlign: "center" }} keyboardType="number-pad" onChangeText={this.handleAmntInput} value={this.state.amnt.toString()} />
                </View>
            );
        }
    }
    render() {
        const { data, isCartView, isRestockView } = this.props;
        const dynamicUnderlayColor = isCartView || isRestockView ? "transparent" : "rgba(212, 212, 212, 0.25)";
        const swipeoutBtns = [
            {
                type: "delete",
                text: "Delete",
                onPress: this.props.handleDeleteTouch(this.props.index),
                color: "white",
                backgroundColor: "red",
            }
        ];
        const swipeDisabled = isCartView === false && isRestockView === false;
        return (
            <TouchableHighlight onPress={this.handleTouch} underlayColor={dynamicUnderlayColor}>
                <Swipeout right={swipeoutBtns} disabled={swipeDisabled} onOpen={() => console.log("opened")} close={true} autoClose={true} buttonWidth={120} >
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
                </Swipeout>
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