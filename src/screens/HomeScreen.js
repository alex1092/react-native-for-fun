import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>
        Hi there
      </Text>

      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <Button
        onPress={() => navigation.navigate("List")}
        title="Go To List"
      />

      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go To Image Screen"
      />
      <Button
        onPress={() => navigation.navigate("Facts")}
        title="Go To Cat Facts"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go To Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go To Color Screen"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go To Square Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
