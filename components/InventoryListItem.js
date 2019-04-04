import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
export default class InventoryListItem extends React.Component {
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