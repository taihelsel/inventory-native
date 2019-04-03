import React from 'react';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import InventoryScreen from "./screens/InventoryScreen";
import RestockScreen from "./screens/RestockScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
const AppStackNavigator = createBottomTabNavigator({
  Inventory: InventoryScreen,
  Restock: RestockScreen,
  Checkout: CheckoutScreen,
})
const AppContainer = createAppContainer(AppStackNavigator);