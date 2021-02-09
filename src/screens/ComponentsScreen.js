import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const CompnentsScreen = () => {
    const name = "Alex"

    return (
        <View>
            <Text  style={styles.textStyle}> 
                Getting started with RN
            </Text>
            <Text style={styles.subHeaderStyle}>
                My name is {name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default CompnentsScreen;