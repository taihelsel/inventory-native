import React, { Component, PropTypes } from 'react';
import {
    Linking,
    Text,
    StyleSheet
} from 'react-native';

export default class HyperLink extends Component {
    _goToURL = () => {
        const { url } = this.props;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else {
                console.log('Don\'t know how to open URI: ' + this.props.url);
            }
        });
    }
    render() {
        const { title, styles } = this.props;

        return (
            <Text style={{...styles}} onPress={this._goToURL}>
                {title}
            </Text>
        );
    }
}
