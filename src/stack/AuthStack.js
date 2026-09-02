import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import PersonalStack from './PersonalStack';
import Auth from './SubStack/Auth';
import { View } from 'react-native';
import { COLOR } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../provider/AuthContext';
const AuthStack = () => {
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user;

  return isLoggedIn ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.other }}>
      <PersonalStack />
    </SafeAreaView>
  ) : (
    <Auth />
  );
};

export default AuthStack;
