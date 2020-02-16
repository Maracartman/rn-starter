import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageDetail = ({ imageSource, title }) => {
  return (
    <View style={styles.imageDetailContainer}>
        <Image source={imageSource}/>
        <Text> {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    imageDetailContainer: {
        borderColor: 'red',
        margin: 40,
        width: 100
    },
});

export default ImageDetail;
