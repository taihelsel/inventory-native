import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from "react-native";

class LoginScreen extends Component {
    state = {
        errorMessage: "",
        email: "",
        password: "",
    };
    static navigationOptions = {
        title: "Login",
    }
    componentWillMount() {
        console.log("connect to firebase here");
    }
    errorMessage = () => {
        if (this.state.errorMessage.length) {
            return (
                <Text style={styles.errorMessage}>
                    {this.state.errorMessage}
                </Text>
            );
        }
    }
    handleEmailInput = email => this.setState({ email });
    handlePasswordInput = password => this.setState({ password });
    handleLoginPress = e => {
        console.log("do login stuff here");
    }
    render() {
        return (
            <View style={styles.container} >
                {this.errorMessage()}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={this.handleEmailInput}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={this.handlePasswordInput}
                    value={this.state.password}
                />
                <TouchableHighlight underlayColor="transparent" style={styles.loginButton} onPress={this.handleLoginPress}>
                    <Text style={{ color: "white", fontSize: 15 }}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        height: 40,
        width: "85%",
        paddingHorizontal: "5%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 8
    },
    loginButton: {
        marginTop: 15,
        marginRight: "7.26%",
        backgroundColor: "grey",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 3,
        alignSelf: "flex-end"
    },
    errorMessage: {
        color: "red",
    }
});

export default LoginScreen;