import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './SubStack/BottomTab';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={BottomTab}
        options={{ headerShown: false }}
        name="BottomTab"
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default DashboardStack;