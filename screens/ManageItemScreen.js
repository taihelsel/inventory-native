import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
/*Components*/
import HyperLink from "../components/HyperLink";
import LargeItemImage from "../components/LargeItemImage";
class ManageItemScreen extends Component {
    handleEditPress = d => e => {
        const { navigation } = this.props;
        const data = { ...d, isEditMode: true };
        navigation.navigate("CreateInventory", { data });
    }
    handledRemovePress = data => e => {
        const { firebase, currentShop, navigation } = this.props;
        const database = firebase.database();
        const inventoryItemRef = database.ref(`/shops/${currentShop}/inventoryItems/${data.barcode}`);
        inventoryItemRef.remove();
        navigation.goBack(null);
    }
    renderPrice = price => {
        return price !== null && typeof price !== "undefined" ?
            typeof price === "object" ? (
                <Text style={styles.price}>{`$${price.min} - $${price.max}`}</Text>
            ) : isNaN(parseFloat(price)) === false ? (
                <Text style={styles.price}>{`$${price}`}</Text>
            ) : null
            : null;
    }
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam("data", false);
        if (data === false) {
            return (
                <View>
                    <Text>
                        Error getting item data
                    </Text>
                </View>
            );
        }
        const { title, price, desc, img, manufacturer, videoLink, isPreview } = data;
        console.log(img);
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={{ marginHorizontal: 75 }}>
                        <LargeItemImage imgUrl={img} />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    {typeof manufacturer !== "undefined" ? <Text style={styles.price}>By {manufacturer}</Text> : null}
                    {this.renderPrice(price)}
                    {typeof videoLink !== "undefined" ? <HyperLink styles={{ ...styles.price, color: "#4e4eff", marginTop: 10, }} title={"Demo Video"} url={videoLink} /> : null}
                    <View style={styles.descriptionContainer}>
                        {desc.map((item, i) => {
                            return <Text style={styles.descriptionText} key={`${item}-${i}`}>• {item}</Text>
                        })}
                    </View>
                    {isPreview === true ? null : (
                        <View style={{ flexDirection: "row", marginHorizontal: 25, height: 50, marginTop: 75 }}>
                            <TouchableOpacity onPress={this.handleEditPress(data)} style={styles.editBtn} >
                                <Text style={styles.btnText}>Edit</Text>
                            </TouchableOpacity >
                            <TouchableOpacity onPress={this.handledRemovePress(data)} style={styles.removeBtn}>
                                <Text style={styles.btnText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>
            </View>
        );
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 15,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 5,
    },
    price: {
        fontSize: 25,
        textAlign: "center"
    },
    descriptionContainer: {
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 30,
        marginHorizontal: 25,
        paddingHorizontal: 12,
        paddingVertical: 7.5
    },
    descriptionText: {
        fontSize: 15,
        marginVertical: 2,
    },
    editBtn: {
        flex: 1,
        backgroundColor: "green",
        marginRight: 4,
        borderRadius: 5,
        justifyContent: "center"
    },
    removeBtn: {
        flex: 1,
        backgroundColor: "red",
        marginRight: 4,
        borderRadius: 5,
        justifyContent: "center"
    },
    btnText: {
        color: "white",
        textAlign: "center"
    }

});
const mapStateToProps = ({ firebase, user }) => {
    return {
        firebase: firebase.firebaseApp,
        currentShop: user.currentShop
    }
}
export default connect(mapStateToProps, null)(ManageItemScreen);