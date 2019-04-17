import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { setShops } from "../actions/userActions";
class LoadingScreen extends Component {
    componentDidMount() {
        const { firebase, setShops, navigation } = this.props;
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                //user account in db
                const userRef = firebase.database().ref("users/" + user.uid);
                userRef.on("value", snapshot => {
                    const data = snapshot.val();
                    const { shops } = data;
                    setShops({ shops });
                    navigation.navigate("UserHome");
                });
            } else {
                //need to log user in 
                navigation.navigate("Auth");
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    loadingText: {
        textAlign: "center",
        fontSize: 20
    }
});

const mapStateToProps = state => ({
    firebase: state.firebase.firebaseApp,
});
const mapDispatchToProps = dispatch => ({
    setShops: (content) => { dispatch(setShops(content)) },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);