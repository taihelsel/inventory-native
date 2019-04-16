import React from 'react';
import { StyleSheet, View, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { updateSearchText, setInventory } from "../actions/inventoryActions";
import { Ionicons } from "@expo/vector-icons";
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
    height: 100,
    backgroundColor: "white",
    borderColor: "rgba(35,35,35,0.15)",
    borderBottomWidth: 0.5,
    borderStyle: "solid",
  },
  navigationInput: {
    width: width / 1.20,
    height: 40,
    backgroundColor: "white",
    color: "black",
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#dedcdc",
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 45,
    paddingHorizontal: 12,
  }
});
class InventoryScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  componentWillMount() {
    /*NEED TO UPDATE WITH NEW SCHEMA*/
    // const { firebase } = this.props;
    // const inventoryRef = firebase.database().ref('inventoryItems');
    // inventoryRef.on("value", snapshot => {
    //   const inventoryData = snapshot.val();
    //   this.sortInventory(inventoryData);
    // });
  }
  sortInventory = (inventory) => {
    const keys = Object.values(inventory), { setInventory } = this.props;
    let categories = {}, items = {};
    keys.forEach((item) => {
      if (typeof categories[item.category] === "undefined") categories[item.category] = {};
      if (typeof items[item.barcode] === "undefined") items[item.barcode] = { ...item };
      const category = categories[item.category];
      category[item.title] = { ...item };
    });
    setInventory({
      inventoryCategories: categories,
      inventoryItems: items,
    });
  }
  handleSearchInput = text => {
    const { updateSearchText } = this.props;
    updateSearchText({ text });
  }
  handleSearchSubmit = e => {
    const possibleItems = [], { navigation, updateSearchText, searchText, inventoryItems } = this.props;
    Object.values(inventoryItems).forEach(data => {
      if (data.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) possibleItems.push(data);
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
    firebase: state.firebase.firebaseApp,
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
  ItemOverviewScreen: { screen: ItemOverviewScreen },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableHighlight style={{ paddingBottom: 5, paddingHorizontal: 25 }} underlayColor="transparent" onPress={() => { navigation.goBack() }}>
          <Ionicons size={48} style={{ flex: 1, textAlign: "center", color: "grey" }} name={"ios-arrow-round-back"} />
        </TouchableHighlight>
      )
    })
  });


