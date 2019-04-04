import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
export default class InventoryListItem extends React.Component {
    handleTouch = e => {
        this.props.handleTouch({ data: this.props.data });
      }
    render() {
        const { data } = this.props;
        return (
            <TouchableHighlight onPress={this.handleTouch}>
                <View style={styles.container}>
                    <View style={{ height: 100, width: 100, backgroundColor: "orange", }}>
                        <Text>IMG HERE</Text>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 1, backgroundColor: "blue", paddingLeft: 15 }} >
                        <Text style={[styles.detailsText, { fontSize: 25, fontWeight: "bold" }]}>{data.title}</Text>
                        <Text style={styles.detailsText}>{data.desc}</Text>
                    </View>
                    <View style={{ backgroundColor: "green", width: 45 }}>
                        <Text>Quick Add BTN</Text>
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
        backgroundColor: "grey",
        marginVertical: 2,
    },
    detailsText: {
        color: "white"
    }
});