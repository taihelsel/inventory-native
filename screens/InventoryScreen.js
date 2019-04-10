import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { updateSearchText, setInventory } from "../actions/inventoryActions";
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
  static navigationOptions = {
    header: null,
  }
  componentWillMount() {
    const { inventoryData } = this.props;
    this.sortInventory(inventoryData);
  }
  sortInventory = (inventory) => {
    const keys = Object.keys(inventory), items = [], { setInventory } = this.props;
    keys.forEach((key) => {
      items.push(inventory[key]);
    });
    setInventory({
      inventoryCategories: keys,
      inventoryItems:items,
    });
  }
  handleSearchInput = text => {
    const { updateSearchText } = this.props;
    updateSearchText({ text });
  }
  handleSearchSubmit = e => {
    const possibleItems = [], { navigation, updateSearchText, searchText, inventoryItems } = this.props;
    inventoryItems.forEach(x => {
      const keys = Object.keys(x);
      keys.forEach((key) => {
        const data = x[key];
        if (data.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) possibleItems.push(data);
      });
    });
    navigation.navigate("InventoryItemsScreen", { data: possibleItems });
    updateSearchText({ text: "" });
  }
  handleCategoryTouch = data => e => {
    const { navigation } = this.props;
    navigation.navigate("InventoryItemsScreen", data);
  }
  render() {
    const { inventoryData, searchText, inventoryCategories } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.navigationHeader}>
          <TextInput style={styles.navigationInput} value={searchText} onSubmitEditing={this.handleSearchSubmit} onChangeText={this.handleSearchInput} returnKeyType={"search"} placeholder="Search Inventory" />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {inventoryCategories.map((category, i) => {
            return <InventoryIconItem key={`${category}-${i}`} title={category} data={inventoryData[category]} handleTouch={this.handleCategoryTouch} />
          })}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchText: state.inventory.searchText,
    inventoryCategories: state.inventory.inventoryCategories,
    inventoryItems: state.inventory.inventoryItems,
    inventoryData: state.inventory.inventoryData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: (content) => { dispatch(updateSearchText(content)) },
    setInventory: (content) => { dispatch(setInventory(content)) },
  }
}
export default InventoryStack = createStackNavigator({
  InventoryScreen: {
    screen: connect(mapStateToProps, mapDispatchToProps)(InventoryScreen)
  },
  InventoryItemsScreen: { screen: InventoryItemsScreen },
  ItemOverviewScreen: { screen: ItemOverviewScreen }
});


