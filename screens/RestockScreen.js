import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Constants } from "expo";
import Swipeout from 'react-native-swipeout';
import { connect } from "react-redux";
import { initRestock, deleteRestockItem } from "../actions/restockActions";
/*Components*/
import InventoryListItem from "../components/InventoryListItem";
class RestockScreen extends React.Component {
  componentDidMount = () => {
    const { initRestock, restockData } = this.props;
    const restockItems = this.buildRestockList(restockData);
    initRestock({ restockItems });
  }
  handleItemTouch = data => e => {
    console.log("restock item clicked");
  }
  handleDeleteTouch = index => {
    const { deleteRestockItem, restockData } = this.props;
    const clonedRestockData = [...restockData];
    clonedRestockData.splice(index, 1);
    const restockItems = this.buildRestockList(clonedRestockData);
    deleteRestockItem({ restockItems, restockData: clonedRestockData });
  }
  buildRestockList = (restockData) => {
    const restockItems = restockData.map((data, i) => {
      const swipeoutBtns = [{
        type: "delete",
        text: "Delete",
        onPress: () => this.handleDeleteTouch(i),
        color: "white",
        backgroundColor: "red",
      }];
      return (
        <Swipeout backgroundColor="transparent" right={swipeoutBtns} buttonWidth={120} key={`${data.title}-${i}`} >
          <InventoryListItem isRestockView={true} index={i + 1} length={restockData.length} handleTouch={this.handleItemTouch} data={data} />
        </Swipeout>
      )
    });
    return restockItems;
  }
  render() {
    const { restockItems } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {restockItems.length > 0 ? restockItems : <Text style={{ textAlign: "center" }}>No items in restock list</Text>}
        </ScrollView>
      </View>
    );
  }
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
    restockItems: state.restock.restockItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initRestock: (content) => { dispatch(initRestock(content)) },
    deleteRestockItem: (content) => { dispatch(deleteRestockItem(content)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestockScreen);