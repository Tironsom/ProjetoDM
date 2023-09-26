import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { useState } from "react";
const handleTextChange = (newText) => {
    setText(newText);
    if (onChangeText) {
        onChangeText(newText);
    }
};
const Texto = ({label}) =>
{
    return(
        <View>
            <Text>(label)</Text>
            <TextInput style={styles.input}
                value={text}
                onChangeText={handleTextChange}>
            </TextInput>
           
        </View>
    )

}
    
const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 8,
        fontSize: 16,
    },

});

export default Texto;

