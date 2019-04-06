import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Constants } from "expo";
import restockData from "../datasets/testRestockDataset";
import Swipeout from 'react-native-swipeout';
/*Components*/
import InventoryListItem from "../components/InventoryListItem";
export default class RestockScreen extends React.Component {
  state = {
    restockData, //importing from local file
    restockItems: [],
  }
  componentDidMount() {
    const restockItems = this.buildRestockList(this.state.restockData);
    this.setState({ restockItems });
  }
  handleItemTouch = e => {
    console.log("restock item clicked");
  }
  handleDeleteTouch = index => {
    const restockData = [...this.state.restockData];
    restockData.splice(index, 1);
    const restockItems = this.buildRestockList(restockData);
    this.setState({ restockItems, restockData });
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
        <Swipeout right={swipeoutBtns} buttonWidth={120} key={`${data.title}-${i}`} >
          <InventoryListItem isRestockView={true} index={i + 1} length={this.state.restockData.length} handleTouch={this.handleItemTouch} data={data} />
        </Swipeout>
      )
    });
    return restockItems;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.state.restockItems.length > 0 ? this.state.restockItems : <Text style={{ textAlign: "center" }}>No items in restock list</Text>}
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
