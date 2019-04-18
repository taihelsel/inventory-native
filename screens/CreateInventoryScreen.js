import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
/*Componenets*/
import BackButton from "../components/BackButton";
import ManageItemDescription from "../components/ManageItemDescription";
import LargeListItem from "../components/LargeListItem";
class CreateInventoryScreen extends Component {
    state = {
        title: "",
        manufacturer: "",
        category: "",
        description: ["saldkfj;;lkjasdf", "saldkfj;;lkjasdf", "saldkfj;;lkjasdf", "saldkfj;;lkjasdf", "saldkfj;;lkjasdf",],
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Add Inventory",
            headerLeft: (<BackButton navigation={navigation} />)
        }
    }
    updateTitle = title => { this.setState({ title }); }
    updateManufacturer = manufacturer => { this.setState({ manufacturer }); }
    updateCategory = category => { this.setState({ category }); }
    addDescriptionItem = item => {
        const desc = [...this.state.description];
        desc.push(item);
        this.setState({ description: desc });
    }
    removeDescriptionItem = item => {
        const desc = [...this.state.description];
        desc.splice(desc.indexOf(item), 1);
        this.setState({ description: desc });
    }
    handleImgBtnPress = () => {
        console.log("img button pressed");
    }
    handleBarcodeBtnPress = () => {
        console.log("barcode button pressed");
    }
    render() {
        return (
            <View style={styles.container} >
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Title</Text>
                        <TextInput style={styles.textInput} value={this.state.title} onChangeText={this.updateTitle} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Desc</Text>
                        <ManageItemDescription desc={this.state.description} addItem={this.addDescriptionItem} removeItem={this.removeDescriptionItem} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Manufacturer</Text>
                        <TextInput style={styles.textInput} value={this.state.manufacturer} onChangeText={this.updateManufacturer} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Category</Text>
                        <TextInput style={styles.textInput} value={this.state.category} onChangeText={this.updateCategory} />
                    </View>
                    <View style={styles.btnWrapper}>
                        <View style={styles.listItemWrapper}>
                            <LargeListItem parentStyle={{ height: 60 }} title={"Add Image"} handlePress={this.handleImgBtnPress} />
                        </View>
                        <View style={styles.listItemWrapper}>
                            <LargeListItem parentStyle={{ height: 60 }} title={"Scan Barcode"} handlePress={this.handleBarcodeBtnPress} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        justifyContent: "flex-start",
        paddingTop: 30,
    },
    inputWrapper: {
        marginHorizontal: 10,
        marginBottom: 25,
    },
    textLabel: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        marginRight: 15,
        marginBottom: 15,
    },
    textInput: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#dedcdc",
        borderStyle: "solid",
        borderRadius: 5,
        fontSize: 17,
    },
    btnWrapper: {
        paddingTop: 20,
        paddingBottom: 40,
    },
    listItemWrapper: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 3,
    }
});
export default CreateInventoryScreen;