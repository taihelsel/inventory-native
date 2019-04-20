import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
/*Components*/
import HyperLink from "../components/HyperLink";
class ManageItemScreen extends Component {
    handleEditPress = data => e => console.log("edit btn pressed");
    handledRemovePress = data => e => console.log("remove btn pressed");
    renderImg = img => {
        if (typeof img === "undefined") {
            return (
                <View style={{ height: 200, marginHorizontal: 75, backgroundColor: "orange" }}>
                    <Text>Err displaying image</Text>
                </View>
            );
        }
        return (
            <View style={{ height: 200, marginHorizontal: 75 }}>
                <Image style={{
                    flex: 1,
                    resizeMode: 'contain'
                }} source={{ uri: img }} />
            </View>
        );
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
        const { title, price, desc, img, manufacturer, videoLink } = data;
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {this.renderImg(img)}
                    <Text style={styles.title}>{title}</Text>
                    {typeof manufacturer !== "undefined" ? <Text style={styles.price}>By {manufacturer}</Text> : null}
                    <Text style={styles.price}>{`$${price.min} - $${price.max}`}</Text>
                    {typeof videoLink !== "undefined" ? <HyperLink styles={{ ...styles.price, color: "#4e4eff", marginTop: 10, }} title={"Demo Video"} url={videoLink} /> : null}
                    <View style={styles.descriptionContainer}>
                        {desc.map((item, i) => {
                            return <Text style={styles.descriptionText} key={`${item}-${i}`}>• {item}</Text>
                        })}
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 25, height: 50, marginTop: 75 }}>
                        <TouchableOpacity onPress={this.handleEditPress(data)} style={styles.editBtn} >
                            <Text style={styles.btnText}>Edit</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={this.handledRemovePress(data)} style={styles.removeBtn}>
                            <Text style={styles.btnText}>Delete</Text>
                        </TouchableOpacity>
                    </View>

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

export default ManageItemScreen;