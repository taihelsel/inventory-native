import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
export default class InventoryCategory extends React.Component {
  handleTouch = e => {
    this.props.navigation.navigate("InventoryListScreen");
  }
  render() {
    return (
      <TouchableHighlight onPress={this.handleTouch}>
        <View style={styles.container}>
          <Text>Inventory Cat</Text>
        </View>
      </TouchableHighlight>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: "blue",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    margin: 7,
  }
});