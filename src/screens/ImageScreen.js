import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImadeDetail from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImadeDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={9}
      />
      <ImadeDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={10}
      />
      <ImadeDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={12}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
