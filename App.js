import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import InventoryStack from "./screens/InventoryScreen";
import RestockScreen from "./screens/RestockScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
const AppStackNavigator = createBottomTabNavigator({
  Inventory: {
    screen: InventoryStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="dropbox" size={35} style={{ color: tintColor }} />
      ),
    }
  },
  Restock: {
    screen: RestockScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="list" size={35} style={{ color: tintColor }} />
      ),
    }
  },
  Checkout: {
    screen: CheckoutScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="shopping-cart" size={35} style={{ color: tintColor }} />
      ),
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: '#D4AF37',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      },
      showIcon: true,
      showLabel: true,
    }
  }
)
const AppContainer = createAppContainer(AppStackNavigator);