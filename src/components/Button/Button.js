import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {styles} from './Button.style';

function Button({text, onPress}) {
  return (
    <View>
      <TouchableHighlight style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Button;
