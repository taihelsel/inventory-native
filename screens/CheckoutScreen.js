import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import cartData from "../datasets/testCartDataset";
/*Components*/
import InventoryListItem from "../components/InventoryListItem";
export default class CheckoutScreen extends React.Component {
  state = {
    minPrice: 0,
    maxPrice: 0,
    cartItems: [],
  }
  componentDidMount() {
    this.buildCart();
  }
  updateCartTotal = (cartItemIndex, amntTxt) => {
    // setting vars
    let currentCartMax = this.state.maxPrice,
      currentCartMin = this.state.minPrice,
      itemData = cartData[cartItemIndex - 1],
      price = itemData.price,
      currentAmnt = itemData.amnt,
      newAmnt = parseInt(amntTxt),
      diff = Math.abs(currentAmnt - newAmnt),
      newCartMin = 0,
      newCartMax = 0;
    // setting new data
    if (currentAmnt === newAmnt) return false;
    if (currentAmnt > newAmnt) {
      //subtract from current Cart min/max
      newCartMax = currentCartMax - (price.max * diff);
      newCartMin = currentCartMin - (price.min * diff);
    } else {
      //add to current Cart min/max
      newCartMax = currentCartMax + (price.max * diff);
      newCartMin = currentCartMin + (price.min * diff);
    }
    // updating with new data
    itemData.amnt = newAmnt;
    this.setState({
      minPrice: newCartMin,
      maxPrice: newCartMax
    });
  }
  handleItemTouch = () => {
    console.log("cart item touched");
  }
  buildCart = () => {
    //using static data from import atm.. convert later when redux is added.
    let minPrice = 0, maxPrice = 0;
    const cartItems = cartData.map((data, i) => {
      minPrice += data.price.min * data.amnt;
      maxPrice += data.price.max * data.amnt;
      return <InventoryListItem isCartView={true} updateCartTotal={this.updateCartTotal} index={i + 1} length={cartData.length} handleTouch={this.handleItemTouch} key={`${data.title}-${i}`} data={data} />
    });
    this.setState({ minPrice, maxPrice, cartItems });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.state.cartItems}
        </ScrollView>
        <Text style={{ textAlign: "center" }}>{`Your price range is: $${this.state.minPrice} - $${this.state.maxPrice}`}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  contentContainer: {

  }
});
