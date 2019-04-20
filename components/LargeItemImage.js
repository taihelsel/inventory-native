import React from "react";
import { View, Image, Text } from "react-native";

const LargeItemImage = ({ imgUrl }) => {
    if (typeof imgUrl === "undefined" || imgUrl === "testing") {
        return (
            <View style={{ height: 200, width: 200, alignSelf: "center", backgroundColor: "orange" }}>
                <Text>Err displaying image</Text>
            </View>
        );
    }
    return (
        <View style={{ height: 200, width: 200, marginHorizontal: 75 }}>
            <Image style={{
                flex: 1,
                resizeMode: "contain"
            }} source={{ uri: imgUrl }} />
        </View>
    );
}
export default LargeItemImage;