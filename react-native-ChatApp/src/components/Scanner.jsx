import React, { Component } from 'react';
import { Text, View, Stylesheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class Scanner extends Component {

    state = {
        hasCameraPermission: null
    };

    componentDidMount(){
        this._requestCameraPermission();
    }

    _requestCameraPermission =  async () => {
        const { status } = await Permission.askAsync(Permissions.CAMERA);
        ths.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = data => {
        Alert.alert(
            'Scan successful',
            JSON.stringify(data)
        );
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    CodeTR
                </Text>
                {this.state.hasCameraPermission === null ?
                    <Text>Requesting for camera permission</Text> :
                    this.satate.hasCameraPermission === false ?
                    <Text>Camera permission is not granted</Text> :
                    <BarCodeScanner
                      onBarCodeRead = {this._handleBarCodeRead} style={{ height:200, width: 200 }}
                    />
                }
            </View>
        );2
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1'
    },
    paragraph: {
        margin: 24,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e'

    },
});
