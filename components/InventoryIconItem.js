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
          <Text>{this.props.title}</Text>
        </View>
      </TouchableHighlight>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 170,
    backgroundColor: "blue",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    margin: 7,
  }
});