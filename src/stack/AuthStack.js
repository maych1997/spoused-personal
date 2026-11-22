import React, { useContext } from 'react';
import PersonalStack from './PersonalStack';
import Auth from './SubStack/Auth';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../provider/AuthContext';
import DashboardStack from './DashboardStack';
const AuthStack = () => {
  const {
    user,
    profileCompleted,
    profileError,
    isLoading,
    retryProfileCompletion,
  } = useContext(AuthContext);
  const isLoggedIn = !!user;

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLOR.other,
        }}
      >
        <ActivityIndicator color={COLOR.primary} />
      </View>
    );
  }

  if (isLoggedIn && profileError) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLOR.other,
        }}
      >
        <Text>{profileError}</Text>
        <TouchableOpacity onPress={retryProfileCompletion}>
          <Text style={{ color: COLOR.primary, marginTop: 16 }}>Try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return isLoggedIn ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.other }}>
      {profileCompleted ? <DashboardStack /> : <PersonalStack />}
    </SafeAreaView>
  ) : (
    <Auth />
  );
};

export default AuthStack;
