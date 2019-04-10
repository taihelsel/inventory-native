import React from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { updateSearchText, setInventory } from "../actions/inventoryActions";
/*firebase*/
import * as firebase from "firebase";
import firebaseConfig from "../firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);
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
    const inventoryRef = firebaseApp.database().ref('inventoryItems');
    inventoryRef.on("value", snapshot => {
      const inventoryData = snapshot.val();
      this.sortInventory(inventoryData);
    });
  }
  sortInventory = (inventory) => {
    const keys = Object.values(inventory), items = [], { setInventory } = this.props;
    let categories = {}, barcodeData = {};
    keys.forEach((item) => {
      if (typeof categories[item.category] === "undefined") categories[item.category] = {};
      if (typeof barcodeData[item.barcode] === "undefined") barcodeData[item.barcode] = { ...item };
      const category = categories[item.category];
      category[item.title] = { ...item };
      items.push(item);
    });
    setInventory({
      inventoryCategories: categories,
      inventoryItems: items,
      inventoryBarcodeData: barcodeData,
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
  renderInventoryCategories = (inventoryCategories) => {
    return Object.keys(inventoryCategories).map((category, i) => {
      return <InventoryIconItem key={`${category}-${i}`} title={category} data={inventoryCategories[category]} handleTouch={this.handleCategoryTouch} />
    })
  }
  render() {
    const { searchText, inventoryCategories } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.navigationHeader}>
          <TextInput style={styles.navigationInput} value={searchText} onSubmitEditing={this.handleSearchSubmit} onChangeText={this.handleSearchInput} returnKeyType={"search"} placeholder="Search Inventory" />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.renderInventoryCategories(inventoryCategories)}
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


