import React from 'react';
import {
    Linking,
    Text
} from 'react-native';
const _goToURL = url => e => {
    Linking.canOpenURL(url).then(supported => {
        if (supported) Linking.openURL(url);
        else console.log(`Error opening URL ${url}`);
    });
}
export default HyperLink = ({ title, styles, url }) => {
    return (
        <Text style={{ ...styles }} onPress={_goToURL(url)}>
            {title}
        </Text>
    );
}
