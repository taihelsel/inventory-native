import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from "react-native";
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
    handleSubmitPress = e => {
        const { navigation } = this.props;
        console.log("send invite link");
        navigation.goBack(null);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Email:</Text>
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
                <View style={styles.submitContainer}>
                    <TouchableOpacity style={styles.submit} underlayColor="transparent" onPress={this.handleSubmitPress}>
                        <Text style={styles.submitText}>Send Invite Link</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 50,
        paddingBottom: 20,
    },
    inputLabel: {
        flex: 1,
        fontSize: 23,
        textAlign: "center",
        paddingVertical: 8,
        marginRight: 5
    },
    input: {
        flex: 3,
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
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 50,
        paddingBottom: 20,
    },
    checkbox: {
        width: 50,
    },
    checkboxText: {
        fontSize: 23,
        marginRight: 5
    },
    submitContainer: {
        height: 50,
        marginHorizontal: 25,
        marginTop: 50,
    },
    submit: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 3,
    },
    submitText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
    }
});

export default CreateUserScreen;