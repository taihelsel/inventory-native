import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Constants } from "expo";
import { connect } from "react-redux";
import { updateCart, deleteCartItem } from "../actions/cartActions";
/*Components*/
import InventoryListItemSwipeout from "../components/InventoryListItemSwipeout";
class CheckoutScreen extends React.Component {
  updateCartTotal = (barcode, amntTxt) => {
    const { maxPrice, minPrice, cartData, updateCart } = this.props;
    // setting vars
    let currentCartMax = maxPrice,
      currentCartMin = minPrice,
      clonedCartData = { ...cartData },
      itemData = clonedCartData[barcode],
      price = itemData.price,
      currentAmnt = itemData.amnt,
      newAmnt = parseInt(amntTxt),
      diff = Math.abs(currentAmnt - newAmnt),
      newCartMin = 0,
      newCartMax = 0;
    // setting new data
    console.log("new", newAmnt, "old", currentAmnt);
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
    updateCart({
      minPrice: newCartMin,
      maxPrice: newCartMax,
      cartData: clonedCartData
    });
  }
  handleItemTouch = () => {
    console.log("cart item touched");
  }
  handleDeleteTouch = key => {
    const { deleteCartItem } = this.props;
    deleteCartItem({ key });
  }
  buildSwipeoutBtns = k => (
    [{
      type: "delete",
      text: "Delete",
      onPress: () => this.handleDeleteTouch(k),
      color: "white",
      backgroundColor: "red",
    }]
  );
  render() {
    const { minPrice, maxPrice, cartData, deleteCartItem } = this.props;
    return (Object.keys(cartData).length > 0) ? (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <InventoryListItemSwipeout isCartView={true} updateCartTotal={this.updateCartTotal} buildSwipeoutBtns={this.buildSwipeoutBtns} data={cartData} handleTouch={handleItemTouch} />
        </ScrollView>
        <Text style={{ textAlign: "center", marginBottom: 15, fontSize: 20, fontWeight: "600" }}>
          Price range: <Text style={styles.price}>{`$${minPrice} - $${maxPrice}`}</Text>
        </Text>
      </View>
    ) : (
        <View style={styles.container} >
          <Text style={{ textAlign: "center", marginTop: 25, fontSize: 25, color: "black" }}>No items in cart</Text>
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

  },
  price: {
    color: "green",
  }
});
const mapStateToProps = (state) => {
  return {
    cartData: state.cart.cartData,
    minPrice: state.cart.minPrice,
    maxPrice: state.cart.maxPrice,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (content) => { dispatch(updateCart(content)) },
    deleteCartItem: (content) => { dispatch(deleteCartItem(content)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);