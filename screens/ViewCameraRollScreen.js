import React from "react";
import { View } from "react-native";
/*Components*/
import CameraRollReader from "../components/CameraRollReader";

const handleImgSelect = img => e => {
    console.log("image selected");
}
const ViewCameraRollScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <CameraRollReader onImgSelect={handleImgSelect} />
        </View>
    )
}

export default ViewCameraRollScreen