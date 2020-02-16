import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <View style={styles.button}>
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate("List")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Image Screen"
          onPress={() => navigation.navigate("Image")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginTop: 10
  }
});

export default HomeScreen;
