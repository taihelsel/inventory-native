import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class LoadingScreen extends Component {
    state = {
        shops: [],
    };
    // componentDidMount() {
    //     const { firebase } = this.props;
    //     firebase.auth().onAuthStateChanged(user => {
    //         const { user } = res;
    //         const userRef = firebase.database().ref("users/" + user.uid);
    //         userRef.on("value", snapshot => {
    //             const data = snapshot.val();
    //             const { shops } = data;
    //             this.setState({ shops, screenType: null });
    //         });
    //     })
    // }
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
export default connect(mapStateToProps, null)(LoadingScreen);