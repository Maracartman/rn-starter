import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const images = [
    {
      source: require("../../assets/mountain.jpg"),
      title: "Mountain",
      score: 3
    },
    { source: require("../../assets/beach.jpg"), title: "Beach", score: 5 },
    { source: require("../../assets/forest.jpg"), title: "Forest", score: 7 }
  ];
  return (
    <View>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={image => image.title}
        data={images}
        renderItem={({  item: image }) => {
          return (
            <ImageDetail
              key={image.title}
              title={image.title}
              imageSource={image.source}
              score={image.score}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
