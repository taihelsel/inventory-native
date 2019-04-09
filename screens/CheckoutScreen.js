import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Constants } from "expo";
import Swipeout from 'react-native-swipeout';
import { connect } from "react-redux";
import { updateCart, buildCart, deleteCartItem } from "../actions/cartActions";
/*Components*/
import InventoryListItem from "../components/InventoryListItem";
class CheckoutScreen extends React.Component {
  componentDidMount() {
    const { buildCart, cartData } = this.props;
    const { minPrice, maxPrice, cartItems } = this.buildCartItems(cartData);
    buildCart({ minPrice, maxPrice, cartItems });
  }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.cartData) !== JSON.stringify(this.props.cartData)) {
      const { buildCart, cartData } = this.props;
      const { minPrice, maxPrice, cartItems } = this.buildCartItems(cartData);
      buildCart({ minPrice, maxPrice, cartItems });
    }
  }
  updateCartTotal = (cartItemIndex, amntTxt) => {
    const { maxPrice, minPrice, cartData, updateCart } = this.props;
    // setting vars
    let currentCartMax = maxPrice,
      currentCartMin = minPrice,
      clonedCartData = [...cartData],
      itemData = clonedCartData[cartItemIndex - 1],
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
    updateCart({
      minPrice: newCartMin,
      maxPrice: newCartMax,
      cartData: clonedCartData
    });
  }
  handleItemTouch = () => {
    console.log("cart item touched");
  }
  handleDeleteTouch = index => {
    const { cartData, deleteCartItem } = this.props;
    const clonedCartData = [...cartData];
    clonedCartData.splice(index, 1);
    const { minPrice, maxPrice, cartItems } = this.buildCartItems(clonedCartData);
    deleteCartItem({ minPrice, maxPrice, cartItems, cartData: clonedCartData });
  }
  buildCartItems = (cartData) => {
    let minPrice = 0, maxPrice = 0;
    const cartItems = cartData.map((data, i) => {
      minPrice += data.price.min * data.amnt;
      maxPrice += data.price.max * data.amnt;
      const swipeoutBtns = [{
        type: "delete",
        text: "Delete",
        onPress: () => this.handleDeleteTouch(i),
        color: "white",
        backgroundColor: "red",
      }];
      return (
        <Swipeout backgroundColor="transparent" right={swipeoutBtns} buttonWidth={120} key={`${data.title}-${i}`} >
          <InventoryListItem isCartView={true} updateCartTotal={this.updateCartTotal} index={i + 1} length={cartData.length} handleTouch={this.handleItemTouch} data={data} />
        </Swipeout>
      )
    });
    return { cartItems, minPrice, maxPrice };
  }
  render() {
    const { cartItems, minPrice, maxPrice } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {cartItems}
        </ScrollView>
        <Text style={{ textAlign: "center", marginBottom: 15, fontSize: 20, fontWeight: "600" }}>{`Your price range is: $${minPrice} - $${maxPrice}`}</Text>
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

const mapStateToProps = (state) => {
  return {
    cartData: state.cart.cartData,
    minPrice: state.cart.minPrice,
    maxPrice: state.cart.maxPrice,
    cartItems: state.cart.cartItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (content) => { dispatch(updateCart(content)) },
    buildCart: (content) => { dispatch(buildCart(content)) },
    deleteCartItem: (content) => { dispatch(deleteCartItem(content)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);