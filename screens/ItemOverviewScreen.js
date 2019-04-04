import React from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
export default class ItemOverviewScreen extends React.Component {
    hasValidData = data => {
        return (typeof data.title !== "undefined" && typeof data.color !== "undefined" && typeof data.price !== "undefined" && typeof data.desc !== "undefined");
    }
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam("data", {});
        if (this.hasValidData(data) === false) return <Text>Error loading item</Text>
        const { title, color, price, desc } = data;
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={{ height: 200, marginHorizontal: 75, backgroundColor: "orange" }}>
                        <Text>IMG HERE</Text>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{`$${price.min} - $${price.max}`}</Text>
                    <View style={styles.descriptionContainer}>
                        {desc.map((item, i) => {
                            return <Text style={styles.descriptionText} key={`${item}-${i}`}>• {item}</Text>
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 30,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
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
    }
});