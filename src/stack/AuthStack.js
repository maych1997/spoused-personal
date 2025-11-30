import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screen/Auth/Splash';
import Login from '../screen/Auth/Login';
import ForgotPassword from '../screen/Auth/ForgotPassword';
import Authentication from '../screen/Auth/Authentication';
import SetPassword from '../screen/Auth/SetPassword';
import AuthHeader from '../components/AuthHeader';
import PersonalStack from '../stack/PersonalStack';
import BottomTab from '../stack/BottomTab';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        header: ({ navigation }) => {
          return <AuthHeader navigation={navigation}></AuthHeader>;
        },
      }}
    >
      <Stack.Screen
        component={Splash}
        options={{ headerShown: false }}
        name="Splash"
      ></Stack.Screen>
      <Stack.Screen component={Login} name="Login"></Stack.Screen>
      <Stack.Screen
        component={ForgotPassword}
        name="ForgotPassword"
      ></Stack.Screen>
      <Stack.Screen
        component={Authentication}
        name="Authentication"
      ></Stack.Screen>
      <Stack.Screen component={SetPassword} name="SetPassword"></Stack.Screen>
      <Stack.Screen
        component={PersonalStack}
        options={{ headerShown: false }}
        name="PersonalStack"
      ></Stack.Screen>
      <Stack.Screen
        component={BottomTab}
        options={{
          headerShown: false,
        }}
        name="BottomTab"
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
