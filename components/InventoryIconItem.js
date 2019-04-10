import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default InventoryIconItem = ({ title, data, handleTouch }) => {
  return (
    <TouchableHighlight underlayColor="rgba(212, 212, 212, 0.25)" onPress={handleTouch({ data })}>
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>{title}</Text>
      </View>
    </TouchableHighlight>

  );
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