import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Button';
function Welcome({navigation}) {
  function goTotMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Button text="Giriş Yap" onPress={goTotMemberSign} />
    </View>
  );
}
export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
