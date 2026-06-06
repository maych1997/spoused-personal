import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screen/Auth/Splash';
import AuthStack from './SubStack/AuthStack';
const Stack = createNativeStackNavigator();
const SplashStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={Splash}
        options={{ headerShown: false }}
        name="Splash"
      ></Stack.Screen>
      <Stack.Screen
        component={AuthStack}
        options={{ headerShown: false }}
        name="AuthStack"
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SplashStack;
