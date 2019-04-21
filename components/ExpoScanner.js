import React, { Component } from 'react';
import { Alert, View, Text, Vibration, StyleSheet } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import { Camera, BarCodeScanner, Permissions } from 'expo';

class ExpoScanner extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        await this.setState({ hasCameraPermission: status === 'granted' });
        await this.resetScanner();
    }

    renderAlert = (title, message) => {
        Alert.alert(
            title,
            message,
            [
                { text: 'OK', onPress: () => this.resetScanner() },
            ],
            { cancelable: true }
        );
    }

    onBarCodeRead = ({ type, data }) => {
        const barcodeID = data;
        const { onScan } = this.props;
        if (barcodeID === null || this.props.isFocused === false) {
            return;
        }
        if (type.startsWith('org.gs1.EAN')) {
            // Do something for EAN
            console.log(`EAN scanned: ${barcodeID}`);
            this.resetScanner();
            onScan({ data: barcodeID });
        } else if (type.startsWith('org.iso.QRCode')) {
            // Do samething for QRCode
            console.log(`QRCode scanned: ${barcodeID}`);
            this.resetScanner();
        } else {
            console.log(
                'This barcode is not supported.',
                `${type} : ${barcodeID}`,
            );
        }
        Vibration.vibrate();
        this.setState({ scannedItem: { barcodeID, type } });
    }

    resetScanner = () => {
        this.scannedCode = null;
        this.setState({
            scannedItem: {
                type: null,
                data: null
            }
        });
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) return <Text style={{ textAlign: "center" }}>Requesting for camera permission</Text>
        if (hasCameraPermission === false) return <Text style={{ textAlign: "center" }}>No access to camera</Text>
        if (this.props.isFocused === false) return <Text style={{ textAlign: "center" }}>Loading</Text>
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <BarCodeScanner
                        onBarCodeScanned={this.onBarCodeRead}
                        style={StyleSheet.absoluteFill}
                    />
                    <Text style={styles.scanScreenMessage}>Focus the barcode to scan.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scanScreenMessage: {
        marginTop: 50,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default withNavigationFocus(ExpoScanner);