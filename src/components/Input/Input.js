import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './Input.style';

function Input({text, placeholder, keyboardType, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        keyboardType={keyboardType}
        style={styles.text_input}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
}

export default Input;
