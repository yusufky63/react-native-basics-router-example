import React, {useState} from 'react';
import {View, Alert} from 'react-native';

import Input from '../Input';
import Button from '../Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(''),
    [userSurname, setUserSurname] = useState(''),
    [userAge, setUserAge] = useState(''),
    [userEmail, setUserEmail] = useState('');

  function goToMemberResult() {
    if (!userName || !userSurname || !userAge || !userEmail) {
      return Alert.alert('Uyarı', 'Lütfen tüm alanları doldurunuz.');
    }
    navigation.navigate('MemberResultScreen', {
      userName,
      userSurname,
      userAge,
      userEmail,
    });
  }

  return (
    <View>
      <Input
        text={'Üye Adı'}
        placeholder={'Adınızı Giriniz..'}
        onChangeText={setUserName}
      />
      <Input
        text={'Üye Soyadı'}
        placeholder={'Soyadınız Giriniz..'}
        onChangeText={setUserSurname}
      />
      <Input
        text={'Üye Yaşı'}
        placeholder={'Yaşınızı Giriniz..'}
        onChangeText={setUserAge}
      />
      <Input
        text={'Üye E-Maili'}
        keyboardType={'email-address'}
        placeholder={'E-Mail Adresinizi Giriniz..'}
        onChangeText={setUserEmail}
      />
      <View style={{alignItems: 'center'}}>
        <Button text={'Kayıt Ol'} onPress={goToMemberResult} />
      </View>
    </View>
  );
}
export default MemberSign;
