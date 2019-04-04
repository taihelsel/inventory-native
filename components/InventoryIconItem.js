import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
export default class InventoryIconItem extends React.Component {
  handleTouch = e => {
    this.props.handleTouch({ data: this.props.data });
  }
  render() {
    return (
      <TouchableHighlight onPress={this.handleTouch}>
        <View style={styles.container}>
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 170,
    backgroundColor: "orange",
    margin: 7,
    justifyContent: "center"
  }
});