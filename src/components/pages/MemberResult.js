import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MemberResult({route}) {
  const user = route.params;
  console.log(user);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={styles.text}>{user.userName}</Text>
      <Text style={styles.text}>{user.userSurname}</Text>
      <Text style={styles.text}>{user.userAge}</Text>
      <Text style={styles.text}>{user.userEmail}</Text>
    </View>
  );
}

export default MemberResult;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
