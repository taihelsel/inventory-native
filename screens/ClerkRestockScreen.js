import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Constants } from "expo";
import { connect } from "react-redux";
import { deleteRestockItem } from "../actions/restockActions";
/*Components*/
import InventoryListItemSwipeout from "../components/InventoryListItemSwipeout";

handleItemTouch = data => e => {
  console.log("restock item clicked");
}
handleDeleteTouch = (key, deleteRestockItem, restockData) => {
  let clonedRestockData = { ...restockData };
  delete clonedRestockData[key];
  deleteRestockItem({ restockData: clonedRestockData });
}
buildSwipeoutBtns = (deleteRestockItem, restockData) => k => (
  [{
    type: "delete",
    text: "Delete",
    onPress: () => handleDeleteTouch(k, deleteRestockItem, restockData),
    color: "white",
    backgroundColor: "red",
  }]
);
const ClerkRestockScreen = ({ deleteRestockItem, restockData }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {Object.keys(restockData).length > 0 ? <InventoryListItemSwipeout buildSwipeoutBtns={buildSwipeoutBtns(deleteRestockItem, restockData)} data={restockData} handlePress={handleItemTouch} /> : <Text style={{ textAlign: "center", marginTop: 25, fontSize: 25, color: "black" }}>No items in restock list</Text>}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  contentContainer: {
  }
});

const mapStateToProps = (state) => {
  return {
    restockData: state.restock.restockData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRestockItem: (content) => { dispatch(deleteRestockItem(content)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClerkRestockScreen);