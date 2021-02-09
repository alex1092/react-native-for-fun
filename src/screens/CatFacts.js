import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Axios from "axios";

const CatFacts = () => {
  const [facts, setFacts] = useState([])

  return (
    <View>
      <Text>You Wanna Know a Fact About CATS???</Text>
      <Button
        title="Press Me"
        onClick={Axios.get("https://cat-fact.herokuapp.com/facts").then(
          function (rsp) {
            console.log(rsp.data[0].text);
           return  setFacts(rsp.data[1].text) 
          }
        )}
      />
      <Text>Your Fact is - {facts} </Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CatFacts;
