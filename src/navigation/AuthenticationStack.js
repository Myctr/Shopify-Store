import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../scenes/auth/LoginView';
import RegisterView from '../scenes/auth/RegisterView';

const Stack = createNativeStackNavigator();

const AuthenticationStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginView" component={LoginView} />
      <Stack.Screen name="RegisterView" component={RegisterView} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
