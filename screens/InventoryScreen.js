import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation";
import data from "../datasets/testInventoryDataset";
/*Components*/
import InventoryIconItem from "../components/InventoryIconItem";
/*Screens*/
import InventoryItemsScreen from "./InventoryItemsScreen";
import ItemOverviewScreen from "./ItemOverviewScreen";
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1,
    flexWrap: "wrap",
    alignContent: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  navigationHeader: {
    width: width,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    height: 80,
    backgroundColor: "#f1f1f1",
  },
  navigationInput: {
    width: width / 1.20,
    height: 30,
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderColor: "#dedcdc",
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 40,
    paddingHorizontal: 7,
  }
});
class InventoryScreen extends React.Component {
  state = {
    searchText: "",
    InventoryCategories: [],
    InventoryItems: [],
  }
  componentWillMount() {
    this.sortInventory(data);
  }
  static navigationOptions = {
    header: null,
  }
  sortInventory = (inventory) => {
    const keys = Object.keys(inventory);
    const items = [];
    keys.forEach((key) => {
      items.push(inventory[key]);
    });
    this.setState({
      InventoryCategories: keys,
      InventoryItems: items,
    });
  }
  handleSearchInput = txt => {
    this.setState({ searchText: txt });
  }
  handleSearchSubmit = e => {
    const possibleItems = [];
    this.state.InventoryItems.forEach(x => {
      const keys = Object.keys(x);
      keys.forEach((key) => {
        const data = x[key];
        if (data.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0) possibleItems.push(data);
      });
    });
    this.props.navigation.navigate("InventoryItemsScreen", { data: possibleItems });
    this.setState({ searchText: "" });
  }
  handleCategoryTouch = data => e => {
    this.props.navigation.navigate("InventoryItemsScreen", data);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigationHeader}>
          <TextInput style={styles.navigationInput} value={this.state.searchText} onSubmitEditing={this.handleSearchSubmit} onChangeText={this.handleSearchInput} returnKeyType={"search"} placeholder="Search Inventory" />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.state.InventoryCategories.map((cat, i) => {
            return <InventoryIconItem key={`${cat}-${i}`} title={cat} data={data[cat]} handleTouch={this.handleCategoryTouch} />
          })}
        </ScrollView>
      </View>
    );
  }
}
export default InventoryStack = createStackNavigator({
  InventoryScreen: { screen: InventoryScreen },
  InventoryItemsScreen: { screen: InventoryItemsScreen },
  ItemOverviewScreen: { screen: ItemOverviewScreen }
});


