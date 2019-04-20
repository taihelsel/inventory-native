import React from "react";
import { View, Text } from "react-native";

const ManageItemScreen = ({ navigation }) => {
    const data = navigation.getParam("data", false);
    if (data === false) {
        return (
            <View>
                <Text>
                    Error getting item data
                </Text>
            </View>
        );
    }
    const { title, price, desc, img, manufacturer, videoLink } = data;
    return (
        <View>
            {typeof img !== "undefined" ? <Text>{img}</Text> : null}
            {typeof title !== "undefined" ? <Text>{title}</Text> : null}
            {typeof manufacturer !== "undefined" ? <Text>{manufacturer}</Text> : null}
            {typeof price !== "undefined" ? <Text>{JSON.stringify(price)}</Text> : null}
            {typeof desc !== "undefined" ? <Text>{JSON.stringify(desc)}</Text> : null}
            {typeof videoLink !== "undefined" ? <Text>{videoLink}</Text> : null}
        </View>
    );
};

export default ManageItemScreen;