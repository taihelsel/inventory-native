import React, { Component } from "react";
import { View, CameraRoll, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

class CameraRollReader extends Component {
    state = { photos: null };

    componentDidMount() {
        this.getPhotos()
            .catch(err => {
                console.log("error getting photos");
            });
    }
    async getPhotos() {
        const photos = await CameraRoll.getPhotos({ assetType: "Photos", first: 10 });
        this.setState({ photos });
    }
    renderPhotos = photos => {
        const { onImgSelect } = this.props;
        return photos.edges.map((data, i) => {
            const photo = data.node;
            return (
                <TouchableOpacity
                    key={photo.timestamp}
                    underlayColor="transparent"
                    onPress={onImgSelect(photo)}
                    style={{
                        margin: 2,
                        borderStyle: "solid",
                        borderWidth: 0.25,
                        borderColor: "grey",
                    }}
                >
                    <Image
                        style={{
                            resizeMode: "contain",
                            height: 115,
                            width: 115,
                        }}
                        source={photo.image}
                    />
                </TouchableOpacity>
            )
        });
    }
    render() {
        const { photos } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {photos ?
                        this.renderPhotos(photos)
                        : <Text style={styles.loadingText}>Fetching photos...</Text>}
                </ScrollView>
            </View>
        );
    };

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 30,
        paddingHorizontal: 2.5,
        flex: 1,
        flexWrap: "wrap",
        alignContent: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    loadingText: {
        fontSize: 18,
        textAlign: "center"
    }
})
export default CameraRollReader;