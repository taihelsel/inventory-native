import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from "react-native";

export default InventoryIconItem = ({ title, data, handleTouch }) => {
  const { img } = data;
  return typeof img === "undefined" ? (
    <TouchableHighlight style={styles.container} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handleTouch({ data })}>
      <View style={[styles.contentContainer]}>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>{title}</Text>
      </View>
    </TouchableHighlight>

  ) : (
      <TouchableHighlight style={styles.container} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handleTouch({ data })}>
        <View style={styles.imgContentContainer}>
          <Image style={{
            flex: 1,
            resizeMode: 'contain'
          }} source={{ uri: img }} />
        </View>
      </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 170,
  },
  contentContainer: {
    backgroundColor: "orange",
    flex: 1,
    margin: 7,
    justifyContent: "center"
  },
  imgContentContainer: {
    flex: 1,
    margin: 7,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "grey",
  }
});