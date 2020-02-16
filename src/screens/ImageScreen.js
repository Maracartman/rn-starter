import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const images = [
    { source: require("../../assets/mountain.jpg"), title: "Mountain" },
    { source: require("../../assets/beach.jpg"), title: "Beach" },
    { source: require("../../assets/forest.jpg"), title: "Forest" }
  ];
  return (
    <View>
      {images.map(image => (
        <ImageDetail
          key={image.title}
          title={image.title}
          imageSource={image.source}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
