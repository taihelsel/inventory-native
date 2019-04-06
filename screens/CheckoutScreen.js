import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Constants } from "expo";
import cartData from "../datasets/testCartDataset";
/*Components*/
import InventoryListItem from "../components/InventoryListItem";
export default class CheckoutScreen extends React.Component {
  state = {
    cartData,//importing from local file.
    minPrice: 0,
    maxPrice: 0,
    cartItems: [],
  }
  componentDidMount() {
    const { minPrice, maxPrice, cartItems } = this.buildCart(this.state.cartData);
    this.setState({ minPrice, maxPrice, cartItems });
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
  handleDeleteTouch = index => e => {
    const cartData = [...this.state.cartData];
    cartData.splice(index - 1, 1);
    const { minPrice, maxPrice, cartItems } = this.buildCart(cartData);
    this.setState({ minPrice, maxPrice, cartItems, cartData });
  }
  buildCart = (cartData) => {
    //using static data from import atm.. convert later when redux is added.
    let minPrice = 0, maxPrice = 0;
    const cartItems = cartData.map((data, i) => {
      minPrice += data.price.min * data.amnt;
      maxPrice += data.price.max * data.amnt;
      return <InventoryListItem handleDeleteTouch={this.handleDeleteTouch} isCartView={true} updateCartTotal={this.updateCartTotal} index={i + 1} length={cartData.length} handleTouch={this.handleItemTouch} key={`${data.title}-${i}`} data={data} />
    });
    return { cartItems, minPrice, maxPrice };
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
    paddingTop: Constants.statusBarHeight,
  },
  contentContainer: {

  }
});
