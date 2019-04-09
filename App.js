import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
/*Screens*/
import InventoryStack from "./screens/InventoryScreen";
import RestockScreen from "./screens/RestockScreen";
import ScanBarcodeStack from "./screens/ScanBarcodeScreen";
import CheckoutScreen from "./screens/CheckoutScreen";

const store = createStore(rootReducer);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
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
  ScanBarcode: {
    screen: ScanBarcodeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="barcode" size={35} style={{ color: tintColor }} />
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