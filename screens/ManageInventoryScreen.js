import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
/*Components*/
import LargeListItem from "../components/LargeListItem";
import BackButton from "../components/BackButton";

class ManageInventoryScreen extends Component {
    state = {
        testInventoryData: {
            "0000000": {
                title: "test title",
                price: {
                    min: 0,
                    max: 5,
                },
                desc: [
                    "test desc",
                    "magical desc test",
                    "amazing super awesome desc",
                ],
                category: "test cat",
                manufacturer: "test manu",
            }
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Manage Inventory",
            headerLeft: (<BackButton navigation={navigation} dest={"AdminHome"} />)
        }
    }
    handlePress = navigation => option => {
        switch (option) {
            case "create-inventory": {
                navigation.navigate("CreateInventory");
                break;
            }
            case "view-inventory": {
                navigation.navigate("ViewInventory", { data: { items: this.state.testInventoryData, dest: "ManageItem" } });
                break;
            }
            default: {
                console.log("error: item not found in admin navigation");
                break;
            }
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.listItemWrapper}>
                    <LargeListItem title={"Add new item"} handlePress={this.handlePress(navigation)} option={"create-inventory"} />
                </View>
                <View style={styles.listItemWrapper}>
                    <LargeListItem title={"View Inventory"} handlePress={this.handlePress(navigation)} option={"view-inventory"} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    listItemWrapper: {
        marginTop: 2,
        marginHorizontal: 2,
    }
});
export default ManageInventoryScreen;