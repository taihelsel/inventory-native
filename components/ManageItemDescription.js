import React, { Component } from "react";
import { View, TouchableHighlight, Text, StyleSheet, TextInput } from "react-native";

class ManageItemDescription extends Component {
    state = {
        newItem: "",
    }
    handleAddItemPress = e => {
        const { newItem } = this.state;
        if (newItem.length > 0) {
            const { addItem } = this.props;
            addItem(newItem);
            this.setState({ newItem: "" });
        }
    }
    handleRemoveItemPress = itemText => e => {
        const { removeItem } = this.props;
        removeItem(itemText);
    }
    render() {
        const { desc } = this.props;
        console.log(desc);
        return (
            <View style={styles.container}>
                <View style={styles.descList}>
                    {desc.map((descText, i) => {
                        return (
                            <View key={`${descText}-${i}`} style={styles.descListItem}>
                                <Text style={styles.descListText}>{descText}</Text>
                                <TouchableHighlight underlayColor="transparent" onPress={this.handleRemoveItemPress(descText)}>
                                    <View style={styles.descListDelBtn}>
                                        <Text style={styles.descListDelBtnText}>X</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        );
                    })}
                </View>
                <View style={styles.addItemContainer}>
                    <TextInput value={this.state.newItem} onChangeText={(newItem) => { this.setState({ newItem }) }} style={styles.addItemInput} />
                    <TouchableHighlight underlayColor="transparent" onPress={this.handleAddItemPress}>
                        <View style={styles.addItemButton}>
                            <Text style={styles.addItemLabel}>Add</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    descList: {

    },
    descListItem: {
        flexDirection: "row",
        marginVertical: 5,
        padding: 4,
        borderStyle: "solid",
        borderRadius: 2,
        borderColor: "grey",
        borderWidth: 0.25,
    },
    descListText: {
        flex: 1,
        color: "black",
        textAlign: "left",
        margin: 10,
    },
    descListDelBtn: {
        width: 40,
        height: 40,
        justifyContent: "center",
        backgroundColor: "red",
        borderRadius: 3,
    },
    descListDelBtnText: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
    addItemContainer: {
        flexDirection: "row",
    },
    addItemInput: {
        flex: 1,
        fontSize: 15,
        marginRight: 5,
        marginLeft: 5,
        marginVertical: 4,
        paddingVertical: 6,
        paddingHorizontal: 5,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#dedcdc",
        borderStyle: "solid",
        borderRadius: 5,
    },
    addItemButton: {
        paddingHorizontal: 30,
        paddingVertical: 7,
        marginTop: 4,
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 3,
    },
    addItemLabel: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
    }
})
export default ManageItemDescription;