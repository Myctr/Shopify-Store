import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationStack from './AuthenticationStack';

const Stack = createNativeStackNavigator();

const RootStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="AuthenticationStack"
        component={AuthenticationStack}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
