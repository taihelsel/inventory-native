import React, { Component } from "react";
import imgurConfig from "../imgurConfig";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { updateInventoryItem, addInventoryItem } from "../actions/inventoryActions";
import { updateCartItem } from "../actions/cartActions";
import { updateRestockItem } from "../actions/restockActions";
import { ImageManipulator } from "expo";
import { connect } from "react-redux";
/*Componenets*/
import BackButton from "../components/BackButton";
import ManageItemDescription from "../components/ManageItemDescription";
import LargeItemImage from "../components/LargeItemImage";
class CreateInventoryScreen extends Component {
    state = {
        title: "Test title",
        price: null,
        manufacturer: "test manu",
        category: "test category",
        description: ["test desc1", "Test desc2"],
        imgUrl: "",
        imgBase64: "",
        barcode: "",
        isEditMode: false,
        originalBarcode: "",
        originalCategory: "",
    }
    descInputRef = React.createRef();
    setDescRef = (ref) => {
        this.descInputRef = ref;
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Add Inventory",
            headerLeft: (<BackButton navigation={navigation} />)
        }
    }
    componentWillMount() {
        const { navigation } = this.props;
        const data = navigation.getParam("data", false);
        if (data !== false) {
            const { title, price, desc, img, manufacturer, videoLink, category, isEditMode, barcode } = data;
            let newPrice = typeof price !== "undefined" ? (
                typeof price !== "object" ? (
                    price.toString()
                ) : (
                        {
                            min: price.min.toString(),
                            max: price.max.toString(),
                        }
                    )
            ) : null
            this.setState({
                category: typeof category !== "undefined" ? category : "",
                title: typeof title !== "undefined" ? title : "",
                manufacturer: typeof manufacturer !== "undefined" ? manufacturer : "",
                description: typeof desc !== "undefined" ? desc : [],
                imgUrl: typeof img !== "undefined" ? img : "",
                barcode: typeof barcode !== "undefined" ? barcode : "",
                originalBarcode: typeof barcode !== "undefined" ? barcode : null,
                originalCategory: typeof category !== "undefined" ? category : null,
                isEditMode,
                price: newPrice,
                // videoLink: typeof videoLink !== "undefined" ? videoLink:"",
            });
        }
    }
    updateTitle = title => { this.setState({ title }); }
    updateManufacturer = manufacturer => { this.setState({ manufacturer }); }
    updateCategory = category => { this.setState({ category }); }
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
    onInputFocus = ref => e => {
        const c = typeof this.refs[ref] === "undefined" ? ref : this.refs[ref];
        const scrollView = this.refs._scrollView;
        const yOffset = 200;
        c.measure((fx, fy, width, height, px, py) => {
            const newOffset = py - yOffset;
            scrollView.scrollTo({ x: 0, y: newOffset, duration: 500 });
        })
    }
    onInputBlur = ref => e => {
        const c = typeof this.refs[ref] === "undefined" ? ref : this.refs[ref];
        const scrollView = this.refs._scrollView;
        const yOffset = 100;
        c.measure((fx, fy, width, height, px, py) => {
            const newOffset = py - yOffset;
            scrollView.scrollTo({ x: 0, y: newOffset, duration: 500 });
        })
    }
    removeBarcode = e => { this.setState({ barcode: "" }); }
    removeImage = e => { this.setState({ imgUrl: "" }); }
    handleFixedPricePress = e => { this.setState({ price: "" }); }
    handlePriceRangePress = e => { this.setState({ price: { min: "", max: "" } }); }
    handleImgSelect = imgData => e => {
        const { image } = { ...imgData };
        const actions = [
            { resize: { width: 200, } }
        ];
        const saveOptions = { format: "jpeg", base64: true };
        (async () => {
            const newImage = await ImageManipulator.manipulateAsync(image.uri, actions, saveOptions);
            this.setState({ imgUrl: newImage.uri, imgBase64: newImage.base64 });
            this.props.navigation.goBack(null);
        })();
    }
    handleAddImagePress = () => {
        const { navigation } = this.props;
        const data = {
            handleImgSelect: this.handleImgSelect
        };
        navigation.navigate("ViewCameraRoll", { data });
    }
    uploadToImgur = (img64, cb) => {
        let formdata = new FormData();
        formdata.append("image", img64);
        formdata.append("type", "base64");
        fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                "Authorization": `Client-ID ${imgurConfig}`
            },
            body: formdata
        })
            .then(res => res.json())
            .then(({ data }) => {
                cb(data);
            })
            .catch(err => {
                console.log("error uploading to imgur", err);
            });
    }
    uploadItemToDB = itemData => {
        const { firebase, currentShop } = this.props;
        const dbInsert = {};
        dbInsert[itemData.barcode] = { ...itemData };
        const database = firebase.database().ref(`/shops/${currentShop}/inventoryItems`)
        database.update(dbInsert);
    }
    handleAddInventoryPress = () => {
        const { addInventoryItem } = this.props;
        const {
            category,
            title,
            manufacturer,
            description,
            imgBase64,
            barcode,
            price,
        } = this.state;
        if (typeof barcode !== "undefined" && typeof imgBase64 !== "undefined") {
            this.uploadToImgur(imgBase64, ({ link }) => {
                const newItem = {
                    category,
                    title,
                    manufacturer,
                    desc: description,
                    img: link,
                    barcode,
                    price,
                };
                this.uploadItemToDB(newItem);
                addInventoryItem({ newItem });
            });
        } else console.log("ERR IN CREATEINVENTORY SCREEN, NEED TO ADD REQUIRED FIELDS");

    }
    handleSaveBtnPress = () => {
        const {
            updateInventoryItem,
            updateCartItem,
            updateRestockItem,
            cartData,
            restockData,
            navigation
        } = this.props;
        const {
            category,
            title,
            manufacturer,
            description,
            imgUrl,
            barcode,
            originalBarcode,
            originalCategory,
            price,
        } = this.state;
        if (originalBarcode === null || originalCategory === null) {
            console.log("error getting original barcode or category in create inventory screen");
            return null;
        }
        updateInventoryItem({
            barcode: originalBarcode, category: originalCategory, newData: {
                category,
                title,
                manufacturer,
                desc: description,
                img: imgUrl,
                barcode,
                price,
            }
        });
        if (typeof restockData[originalBarcode] !== "undefined") {
            updateRestockItem({
                barcode: originalBarcode,
                newData: {
                    category,
                    title,
                    manufacturer,
                    desc: description,
                    img: imgUrl,
                    barcode,
                    price,
                }
            });
        }
        if (typeof cartData[originalBarcode] !== "undefined") {
            const cartItem = cartData[originalBarcode];
            updateCartItem({
                barcode: originalBarcode,
                newData: {
                    amnt: cartItem.amnt,
                    category,
                    title,
                    manufacturer,
                    desc: description,
                    img: imgUrl,
                    barcode,
                    price,
                }
            });
        }
        navigation.navigate("ManageInventory", { data: { items: false, dest: "ManageItem" } });
    }
    handlePreviewBtnPress = () => {
        const { navigation } = this.props;
        const {
            title,
            price,
            manufacturer,
            category,
            description,
            imgUrl,
        } = this.state;
        const data = {
            img: imgUrl,
            title,
            price,
            manufacturer,
            category,
            desc: description,
            isPreview: true,
        };
        navigation.navigate("ManageItem", { data });
    }
    removePrice = e => { this.setState({ price: null }); }
    updateFixedPrice = price => {
        const priceNum = parseFloat(price);
        if (price[price.length - 1] === "." && price.indexOf(".") !== price.length - 1) return null;
        if (isNaN(priceNum) === false) {
            if (price.length > 12) return null;
            this.setState({ price: price })
        } else {
            this.setState({ price: "" });
        }
    }
    updateMinPrice = minPrice => {
        const priceNum = parseFloat(minPrice);
        const newPrice = { ...this.state.price }
        if (minPrice[minPrice.length - 1] === "." && minPrice.indexOf(".") !== minPrice.length - 1) return null;
        if (isNaN(priceNum) === false) {
            if (minPrice.length > 12) return null;
            newPrice.min = minPrice;
            this.setState({ price: newPrice });
        } else {
            newPrice.min = "";
            this.setState({ price: newPrice });
        }
    }
    updateMaxPrice = maxPrice => {
        const priceNum = parseFloat(maxPrice);
        const newPrice = { ...this.state.price }
        if (maxPrice[maxPrice.length - 1] === "." && maxPrice.indexOf(".") !== maxPrice.length - 1) return null;
        if (isNaN(priceNum) === false) {
            newPrice.max = maxPrice;
            this.setState({ price: newPrice });
        } else {
            newPrice.max = "";
            this.setState({ price: newPrice });
        }
    }
    renderPriceInput = price => {
        if (price === null) return null;
        if (typeof price !== "object") {
            //is fixed
            const priceString = price.toString();
            return (
                <View style={styles.barcodeContainer}>
                    <TextInput
                        placeholder={"Enter a fixed price"}
                        onChangeText={this.updateFixedPrice}
                        value={priceString}
                        style={styles.barcodeLabel}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity underlayColor="transparent" onPress={this.removePrice}>
                        <View style={styles.barcodeDelBtn}>
                            <Text style={styles.barcodeDelBtnText}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        } else {
            //is range
            const { min, max } = this.state.price;
            if (typeof min === "undefined" || typeof max === "undefined") {
                this.setState({
                    price: {
                        min: "",
                        max: "",
                    }
                });
            }
            return (

                <View style={styles.barcodeContainer}>
                    <TextInput
                        placeholder={"Enter a min"}
                        onChangeText={this.updateMinPrice}
                        value={min}
                        style={[styles.priceRangeInput, {
                            borderStyle: "solid",
                            borderColor: "grey",
                            borderRightWidth: 0.25,
                        }]}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder={"Enter a max"}
                        onChangeText={this.updateMaxPrice}
                        value={max}
                        style={styles.priceRangeInput}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity underlayColor="transparent" onPress={this.removePrice}>
                        <View style={styles.barcodeDelBtn}>
                            <Text style={styles.barcodeDelBtnText}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            )
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <ScrollView contentContainerStyle={styles.contentContainer} contentOffset={this.state.contentOffset} ref="_scrollView">
                    {this.state.imgUrl.length < 1 || this.state.barcode.length < 1 ? (
                        <View style={styles.headerBtnContainer}>
                            {this.state.imgUrl.length < 1 ? (
                                <TouchableOpacity underlayColor="transparent" style={styles.addImgBtn} onPress={this.handleAddImagePress}>
                                    <Text style={styles.btnText}>Add Image</Text>
                                </TouchableOpacity>
                            ) : null}
                            {this.state.barcode.length < 1 ? (
                                <TouchableOpacity underlayColor="transparent" style={styles.addBarcodeBtn} onPress={this.handleBarcodeBtnPress}>
                                    <Text style={styles.btnText}>Add Barcode</Text>
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    ) : null}
                    <View style={styles.headerPreviewContainer}>
                        {this.state.imgUrl.length > 0 ? (
                            <View style={styles.imageContainer}>
                                <View style={styles.imgPreviewContainer}>
                                    <LargeItemImage imgUrl={this.state.imgUrl} />
                                </View>
                                <TouchableOpacity underlayColor="transparent" onPress={this.removeImage}>
                                    <View style={styles.imgDeleteBtn}>
                                        <Text style={styles.imgDeleteBtnText}>X</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                        {this.state.barcode.length > 0 ? (
                            <View style={styles.barcodeContainer}>
                                <Text style={styles.barcodeLabel}>Barcode: {this.state.barcode}</Text>
                                <TouchableOpacity underlayColor="transparent" onPress={this.removeBarcode}>
                                    <View style={styles.barcodeDelBtn}>
                                        <Text style={styles.barcodeDelBtnText}>X</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Title</Text>
                        <TextInput ref="_titleInput" onBlur={this.onInputBlur("_titleInput")} onFocus={this.onInputFocus("_titleInput")} style={styles.textInput} value={this.state.title} onChangeText={this.updateTitle} />
                    </View>
                    {this.state.price === null ? (
                        <View style={styles.headerBtnContainer}>
                            <TouchableOpacity underlayColor="transparent" style={styles.addImgBtn} onPress={this.handleFixedPricePress}>
                                <Text style={styles.btnText}>Add Fixed Price</Text>
                            </TouchableOpacity>
                            <TouchableOpacity underlayColor="transparent" style={styles.addBarcodeBtn} onPress={this.handlePriceRangePress}>
                                <Text style={styles.btnText}>Add Price Range</Text>
                            </TouchableOpacity>
                        </View>
                    ) : <View style={styles.inputWrapper}>
                            <Text style={styles.textLabel}>Price</Text>
                            {this.renderPriceInput(this.state.price)}
                        </View>}

                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Desc</Text>
                        <ManageItemDescription setDescRef={this.setDescRef} onBlur={this.onInputBlur} onFocus={this.onInputFocus} desc={this.state.description} addItem={this.addDescriptionItem} removeItem={this.removeDescriptionItem} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Manufacturer</Text>
                        <TextInput ref="_manufacturerInput" onBlur={this.onInputBlur("_manufacturerInput")} onFocus={this.onInputFocus("_manufacturerInput")} style={styles.textInput} value={this.state.manufacturer} onChangeText={this.updateManufacturer} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textLabel}>Category</Text>
                        <TextInput ref="_categoryInput" onBlur={this.onInputBlur("_categoryInput")} onFocus={this.onInputFocus("_categoryInput")} style={styles.textInput} value={this.state.category} onChangeText={this.updateCategory} />
                    </View>
                    {this.state.isEditMode ? (
                        <View style={styles.footerBtnContainer}>
                            <TouchableOpacity underlayColor="transparent" style={styles.greenBtn} onPress={this.handleSaveBtnPress}>
                                <Text style={styles.btnText}>Save Changes</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (<View style={styles.footerBtnContainer}>
                        <TouchableOpacity onPress={this.handlePreviewBtnPress} style={styles.previewBtn}>
                            <Text style={styles.btnText}>Preview</Text>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor="transparent" style={styles.greenBtn} onPress={this.handleAddInventoryPress}>
                            <Text style={styles.btnText}>Add to Inventory</Text>
                        </TouchableOpacity>
                    </View>)}
                </ScrollView>
            </View >
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
    headerPreviewContainer: {
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
    listItemWrapper: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 3,
    },
    imageContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
        padding: 4,
        borderStyle: "solid",
        borderRadius: 2,
        borderColor: "grey",
        borderBottomWidth: 0.25,
        marginBottom: 20,
        justifyContent: "center",
    },
    imagePreviewContainer: {
        flex: 1,
    },
    imgDeleteBtn: {
        width: 40,
        height: 40,
        justifyContent: "center",
        backgroundColor: "red",
        borderRadius: 3,
    },
    imgDeleteBtnText: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
    barcodeContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
        padding: 4,
        borderStyle: "solid",
        borderRadius: 2,
        borderColor: "grey",
        borderWidth: 0.25,
        marginBottom: 20,
    },
    barcodeLabel: {
        textAlign: "left",
        fontSize: 18,
        margin: 10,
        flex: 1,
    },
    barcodeDelBtn: {
        width: 40,
        height: 40,
        justifyContent: "center",
        backgroundColor: "red",
        borderRadius: 3,
    },
    barcodeDelBtnText: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
    headerBtnContainer: {
        flexDirection: "row",
        marginHorizontal: 25,
        height: 50,
        marginBottom: 35,
    },
    footerBtnContainer: {
        flexDirection: "row",
        marginHorizontal: 25,
        height: 50,
        marginTop: 35,
        marginBottom: 45,
    },
    addImgBtn: {
        flex: 1,
        backgroundColor: "orange",
        marginRight: 4,
        borderRadius: 5,
        justifyContent: "center"
    },
    addBarcodeBtn: {
        flex: 1,
        backgroundColor: "grey",
        marginRight: 4,
        borderRadius: 5,
        justifyContent: "center"
    },
    previewBtn: {
        flex: 1,
        backgroundColor: "grey",
        marginRight: 4,
        borderRadius: 5,
        justifyContent: "center"
    },
    greenBtn: {
        flex: 1,
        backgroundColor: "green",
        marginRight: 4,
        borderRadius: 5,
        justifyContent: "center"
    },
    btnText: {
        color: "white",
        textAlign: "center"
    },
    priceRangeInput: {
        flex: 1,
        textAlign: "left",
        fontSize: 18,
        margin: 10,
    }
});
const mapStateToProps = ({ cart, restock, firebase, user }) => ({
    cartData: cart.cartData,
    restockData: restock.restockData,
    firebase: firebase.firebaseApp,
    currentShop: user.currentShop
});
const mapDispatchToProps = dispatch => ({
    updateInventoryItem: (content) => { dispatch(updateInventoryItem(content)) },
    addInventoryItem: (content) => { dispatch(addInventoryItem(content)) },
    updateCartItem: (content) => { dispatch(updateCartItem(content)) },
    updateRestockItem: (content) => { dispatch(updateRestockItem(content)) },
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateInventoryScreen);