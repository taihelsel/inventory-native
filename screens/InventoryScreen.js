import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation";
import InventoryCategory from "../components/InventoryCategory";
import InventoryListScreen from "./InventoryListScreen";
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
    backgroundColor: "grey",
  },
  navigationInput: {
    width: width / 1.20,
    height: 30,
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 40,
    paddingHorizontal: 7,
  }
});
class InventoryScreen extends React.Component {
  state = {
    searchText: "",
  }
  static navigationOptions = {
    header: null,
  }
  handleSearchInput = txt => {
    this.setState({ searchText: txt });
  }
  handleSearchSubmit = e => {
    console.log("searching for ", this.state.searchText);
    this.setState({ searchText: "" });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigationHeader}>
          <TextInput style={styles.navigationInput} value={this.state.searchText} onSubmitEditing={this.handleSearchSubmit} onChangeText={this.handleSearchInput} returnKeyType={"search"} placeholder="Search Inventory" />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <InventoryCategory navigation={this.props.navigation} />
          <InventoryCategory navigation={this.props.navigation}/>
          <InventoryCategory navigation={this.props.navigation}/>
          <InventoryCategory navigation={this.props.navigation}/>
        </ScrollView>
      </View>
    );
  }
}
export default InventoryStack = createStackNavigator({
  InventoryScreen: { screen: InventoryScreen },
  InventoryListScreen: { screen: InventoryListScreen }
});


