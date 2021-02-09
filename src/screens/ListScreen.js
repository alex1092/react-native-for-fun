import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () =>    {
const friends = [
    {name: 'friend #1', age: 21},
    {name: 'friend #2', age: 2},
    {name: 'friend #3', age: 26},
    {name: 'friend #4', age: 25},
    {name: 'friend #5', age: 61},
    {name: 'friend #6', age: 6},
    {name: 'friend #7', age: 25},
    {name: 'friend #8', age: 53},
    {name: 'friend #9', age: 43},
];
return(
     <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>Name: {item.name} Age: {item.age}</Text>
        }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
})

export default ListScreen