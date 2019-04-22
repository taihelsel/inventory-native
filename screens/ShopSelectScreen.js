import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { setCurrentShop } from "../actions/userActions";
const handlePress = (shop, setCurrentShop, navigation) => e => {
    const { shopId, group } = shop;
    setCurrentShop({ currentShop: { shopId, group } });
    navigation.navigate("Clerk");
}
const ShopSelectScreen = ({ shops, setCurrentShop, navigation }) => {
    if (shops.length < 1) return <View style={styles.container}><Text>Error fetching shops</Text></View>
    return (
        <View style={styles.container}>
            {
                shops.map((shop) => {
                    return (
                        <View key={shop.shopId} style={styles.contentContainer}>
                            <TouchableHighlight style={styles.optionContainer} underlayColor="rgba(212, 212, 212, 0.25)" onPress={handlePress(shop, setCurrentShop, navigation)}>
                                <View style={styles.optionContentContainer}>
                                    <Text style={styles.optionText}>{shop.shopName}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    );
                })
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    contentContainer: {
        height: 125,
    },
    optionContainer: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: "orange",
    },
    optionContentContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "orange",
    },
    optionText: {
        textAlign: "center",
        color: "white"
    }
});

const mapStateToProps = state => ({
    shops: state.user.shops,
});
const mapDispatchToProps = dispatch => ({
    setCurrentShop: content => { dispatch(setCurrentShop(content)) },
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopSelectScreen);