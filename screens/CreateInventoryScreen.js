import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
/*Componenets*/
import BackButton from "../components/BackButton";
import ManageItemDescription from "../components/ManageItemDescription";
class CreateInventoryScreen extends Component {
    state = {
        title: "",
        manufacturer: "",
        category: "",
        description: ["test"],
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
    render() {
        return (
            <View style={styles.container} >
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Title:</Text>
                        <TextInput style={styles.textInput} value={this.state.title} onChangeText={this.updateTitle} />
                    </View>
                    <View style={styles.descWrapper}>
                        <Text style={styles.descLabel}>Desc:</Text>
                        <ManageItemDescription desc={this.state.description} addItem={this.addDescriptionItem} removeItem={this.removeDescriptionItem} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Manufacturer:</Text>
                        <TextInput style={styles.textInput} value={this.state.manufacturer} onChangeText={this.updateManufacturer} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Category:</Text>
                        <TextInput style={styles.textInput} value={this.state.category} onChangeText={this.updateCategory} />
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
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 30,
    },
    inputWrapper: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 15,
    },
    descWrapper: {
        marginHorizontal: 10,
        marginVertical: 15,
    },
    textLabel: {
        fontSize: 22,
        textAlign: "center",
        marginRight: 15,
    },
    descLabel: {
        textAlign: "left",
        fontSize: 22,
        marginBottom: 4,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 5,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#dedcdc",
        borderStyle: "solid",
        borderRadius: 5,
        fontSize: 15,
    }
});
export default CreateInventoryScreen;