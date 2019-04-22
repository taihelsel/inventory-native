import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
class ProfileScreen extends Component {
    state = {
        group: "admin",
    }
    navigate = dest => e => {
        const { navigation } = this.props;
        navigation.navigate(dest);
    }
    handleLogoutPress = e => {
        console.log("logout");
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={[styles.buttonContainer, { marginTop: 50 }]}>
                        <TouchableOpacity underlayColor="transparent" style={[styles.button, { borderTopWidth: 0.25 }]} onPress={this.navigate("ShopSelect")}>
                            <View style={styles.buttonIconContainer}>
                                <MaterialIcons name="store" size={40} style={styles.buttonIcon} />
                            </View>
                            <Text style={styles.buttonText}>Select Shop</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity underlayColor="transparent" style={styles.button} onPress={this.navigate("BoxHandler")}>
                            <View style={styles.buttonIconContainer}>
                                <MaterialCommunityIcons name="account-box-multiple" size={40} style={styles.buttonIcon} />
                            </View>
                            <Text style={styles.buttonText}>Switch to Box Handler</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity underlayColor="transparent" style={styles.button} onPress={this.navigate("Admin")}>
                            <View style={styles.buttonIconContainer}>
                                <FontAwesome name="user-circle" size={40} style={styles.buttonIcon} />
                            </View>
                            <Text style={styles.buttonText}>Admin Pannel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity underlayColor="transparent" style={styles.button} onPress={this.handleLogoutPress}>
                            <View style={styles.buttonIconContainer}>
                                <MaterialCommunityIcons name="logout" size={40} style={styles.buttonIcon} />
                            </View>
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    contentContainer: {
        flex: 1,
    },
    buttonContainer: {
        height: 50,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderStyle: "solid",
        borderBottomWidth: 0.25,
        borderColor: "grey"
    },
    buttonIconContainer: {
        marginLeft: 15,
        marginRight: 15,
    },
    buttonIcon: {
        color: "grey",
    },
    buttonText: {
        flex: 1,
        fontSize: 22,
        color: "grey",
    },

});

export default ProfileScreen;