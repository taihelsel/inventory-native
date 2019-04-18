import React from "react";
import { TouchableHighlight, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const handlePress = (navigation, dest) => e => {
    if (typeof dest !== "undefined") {
        navigation.navigate(dest);
    }
    navigation.goBack(null);
}
const BackButton = ({ navigation, title, dest }) => {
    return (
        <TouchableHighlight style={{ paddingBottom: 5, paddingHorizontal: 25 }} underlayColor="transparent" onPress={handlePress(navigation, dest)}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Ionicons size={48} style={{ flex: 1, textAlign: "center", color: "grey", }} name={"ios-arrow-round-back"} />
                {typeof title !== "undefined" ? (
                    <View style={{ flex: 1, justifyContent: "center", }}>
                        <Text style={{ textAlign: "center", color: "grey", fontSize: 18, fontWeight: "500", marginTop: 8, marginLeft: 7 }}>{title}</Text>
                    </View>
                ) : null}
            </View>
        </TouchableHighlight>
    );
}

export default BackButton;