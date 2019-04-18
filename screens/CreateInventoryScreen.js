import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
/*Componenets*/
import BackButton from "../components/BackButton";
import ManageItemDescription from "../components/ManageItemDescription";
import LargeListItem from "../components/LargeListItem";
class CreateInventoryScreen extends Component {
    state = {
        title: "",
        manufacturer: "",
        category: "",
        description: ["saldkfj;;lkjasdf", "saldkfj;;lkjasdf", "saldkfj;;lkjasdf", "saldkfj;;lkjasdf", "saldkfj;;lkjasdf"],
        imgUrl: "",
        barcode: "",
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Add Inventory",
            headerLeft: (<BackButton navigation={navigation} />)
        }
    }
    updateTitle = title => { this.setState({ title }); }
    updateManufacturer = manufacturer => { this.setState({ manufacturer }); }
    updateCategory = category => { this.setState({ category }); }
    updateImgUrl = imgUrl => { this.setState({ imgUrl }); }
    addDescriptionItem = item => {
        const desc = [...this.state.description];
        desc.push(item);
        this.setState({ description: desc });
    }
    removeDescriptionItem = item => {
        const desc = [...this.state.description];
        desc.splice(desc.indexOf(item), 1);
        this.setState({ description: desc });
    }
    handleBarcodeScan = (scan) => {
        this.setState({ barcode: scan.data });
        this.props.navigation.goBack(null);
    }
    handleBarcodeBtnPress = () => {
        const { navigation } = this.props;
        navigation.navigate("ScanBarcode", { data: { handleBarcodeScan: this.handleBarcodeScan } });
    }
    onInputFocus = refId => e => {
        const c = this.refs[refId];
        const scrollView = this.refs._scrollView;
        const yOffset = 100;
        c.measure((fx, fy, width, height, px, py) => {
            const newOffset = py - yOffset;
            scrollView.scrollTo({ x: 0, y: newOffset, duration: 500 });
        })
    }
    onInputBlur = refId => e => {
        const c = this.refs[refId];
        const scrollView = this.refs._scrollView;
        const yOffset = 100;
        c.measure((fx, fy, width, height, px, py) => {
            const newOffset = py - yOffset;
            scrollView.scrollTo({ x: 0, y: newOffset, duration: 500 });
        })
    }
    render() {
        return (
            <View style={styles.container} >
                <ScrollView contentContainerStyle={styles.contentContainer} contentOffset={this.state.contentOffset} ref="_scrollView">
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Title</Text>
                        <TextInput ref="_titleInput" onBlur={this.onInputBlur("_titleInput")} onFocus={this.onInputFocus("_titleInput")} style={styles.textInput} value={this.state.title} onChangeText={this.updateTitle} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Desc</Text>
                        <ManageItemDescription desc={this.state.description} addItem={this.addDescriptionItem} removeItem={this.removeDescriptionItem} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Manufacturer</Text>
                        <TextInput ref="_manufacturerInput" onBlur={this.onInputBlur("_manufacturerInput")} onFocus={this.onInputFocus("_manufacturerInput")} style={styles.textInput} value={this.state.manufacturer} onChangeText={this.updateManufacturer} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Category</Text>
                        <TextInput ref="_categoryInput" onBlur={this.onInputBlur("_categoryInput")} onFocus={this.onInputFocus("_categoryInput")} style={styles.textInput} value={this.state.category} onChangeText={this.updateCategory} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Image URL</Text>
                        <TextInput ref="_imgUrlInput" onBlur={this.onInputBlur("_imgUrlInput")} onFocus={this.onInputFocus("_imgUrlInput")} style={styles.textInput} value={this.state.imgUrl} onChangeText={this.updateImgUrl} />
                    </View>
                    <View style={styles.btnWrapper}>
                        <View style={styles.listItemWrapper}>
                            <LargeListItem parentStyle={{ height: 60 }} title={"Scan Barcode"} handlePress={this.handleBarcodeBtnPress} />
                        </View>
                        {this.state.barcode.length > 0 ? (
                            <Text style={styles.barcodeLabel}>Barcode: {this.state.barcode}</Text>
                        ) : null}
                    </View>
                </ScrollView>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        justifyContent: "flex-start",
        paddingTop: 30,
    },
    inputWrapper: {
        marginHorizontal: 10,
        marginBottom: 25,
    },
    textLabel: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        marginRight: 15,
        marginBottom: 15,
    },
    textInput: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#dedcdc",
        borderStyle: "solid",
        borderRadius: 5,
        fontSize: 17,
    },
    btnWrapper: {
        paddingTop: 20,
        paddingBottom: 40,
    },
    listItemWrapper: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 3,
    },
    barcodeLabel: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 15
    }
});
export default CreateInventoryScreen;