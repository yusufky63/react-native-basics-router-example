import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './components/pages/Welcome';
import MemberSign from './components/pages/MemberSign';
import MemberResult from './components/pages/MemberResult';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
