import React from "react";
import { View, Image, Text } from "react-native";

const LargeItemImage = ({ imgUrl }) => {
    if (typeof imgUrl === "undefined") {
        return (
            <View style={{ height: 200, width: 200, alignSelf: "center", backgroundColor: "orange" }}>
                <Text>Err displaying image</Text>
            </View>
        );
    }
    return (
        <Image style={{
            height: 200,
            width: 200,
            resizeMode: "contain"
        }} source={{ uri: imgUrl }} />
    );
}
export default LargeItemImage;