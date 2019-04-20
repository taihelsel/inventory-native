import React from "react";
import { View } from "react-native";
/*Components*/
import CameraRollReader from "../components/CameraRollReader";

const ViewCameraRollScreen = ({ navigation }) => {
    const data = navigation.getParam("data", false);
    if (data === false || typeof data.handleImgSelect === "undefined") {
        return (
            <View style={{ flex: 1 }}>
                <Text>
                    Error getting cb for cameraroll
                </Text>
            </View>
        );
    }
    const { handleImgSelect } = data;
    return (
        <View style={{ flex: 1 }}>
            <CameraRollReader onImgSelect={handleImgSelect} />
        </View>
    )
}

export default ViewCameraRollScreen