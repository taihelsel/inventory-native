import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

hasValidData = ({ email, group }) => (typeof email !== "undefined" && typeof group !== "undefined");
const UserList = ({ users, handleTouch }) => {
    if (typeof users === "undefined") {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontSize: 23 }}>
                    Error getting users
                    </Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.emailHeader}>Email</Text>
                <Text style={styles.groupHeader}>Group</Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {
                    users.map((user, i) => {
                        return hasValidData(user) ? (
                            <TouchableOpacity underlayColor="transparent" onPress={handleTouch(user)} key={`${user.email}-${i}`}>
                                <View style={styles.userContainer}>
                                    <Text style={styles.userEmail}>{user.email}</Text>
                                    <Text style={styles.userGroup}>{user.group}</Text>
                                </View>
                            </TouchableOpacity>
                        ) : null;
                    })
                }
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,
        borderColor: "rgba(35,35,35,0.25)",
        borderBottomWidth: 0.5,
        borderStyle: "solid",
    },
    emailHeader: {
        flex: 1,
        fontSize: 23,
        paddingLeft: 15,
    },
    groupHeader: {
        flex: 1,
        fontSize: 23,
        textAlign: "right",
        paddingRight: 15,
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 65,
        borderColor: "rgba(35,35,35,0.15)",
        borderBottomWidth: 0.5,
        borderStyle: "solid",
    },
    userEmail: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 15,
    },
    userGroup: {
        flex: 1,
        fontSize: 18,
        textAlign: "right",
        paddingRight: 15,
    }
});
export default UserList;