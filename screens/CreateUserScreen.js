import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Switch } from "react-native";
/*Components*/
import BackButton from "../components/BackButton";

class CreateUserScreen extends Component {
    state = {
        email: "",
        isAdmin: false,
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Add User",
            headerLeft: (<BackButton navigation={navigation} />)
        }
    }
    handleEmailInput = email => { this.setState({ email }); }
    handleAdminCheck = () => {
        const { isAdmin } = this.state;
        this.setState({ isAdmin: !isAdmin });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={this.handleEmailInput}
                    />
                </View>
                <View style={styles.checkboxWrapper}>
                    <Text style={styles.checkboxText}>Shop Admin: </Text>
                    <Switch
                        value={this.state.isAdmin}
                        onValueChange={this.handleAdminCheck}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputWrapper: {
        marginHorizontal: 50,
        marginVertical: 20,
    },
    inputLabel: {
        textAlign: "center",
        fontSize: 23,
    },
    input: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#dedcdc",
        borderStyle: "solid",
        borderRadius: 5,
        fontSize: 17,
    },
    checkboxWrapper: {
        flexDirection: "row",
        justifyContent: "center"
    },
    checkbox: {
        width: 50,
    },
    checkboxText: {
        fontSize: 23,
        marginRight: 5
    }
});

export default CreateUserScreen;