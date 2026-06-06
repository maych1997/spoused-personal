import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import ProfileDetails from '../ProfileDetails';
import Rewind from '../../../assets/icons/rewind.svg';
import Filter from '../../../assets/icons/filter.svg';
import Boost from '../../../assets/icons/boost.svg';
import BackProfile from '../../../assets/icons/back-profile.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../../utils/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        header: ({ navigation, route }) => {
          console.log('::::::::', navigation.canGoBack());
          return (
            <View
              style={{
                backgroundColor: COLOR.other,
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: wp('5%'),
                paddingRight: wp('5%'),
                justifyContent: 'space-between',
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  {navigation.canGoBack() && route.name == 'ProfileDetails' ? (
                    <BackProfile></BackProfile>
                  ) : (
                    <Rewind></Rewind>
                  )}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: wp('2%'),
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: COLOR.primary,
                    paddingLeft: hp('2%'),
                    paddingRight: hp('2%'),
                    paddingTop: hp('1%'),
                    paddingBottom: hp('1%'),
                    flexDirection: 'row',
                    gap: wp('2%'),
                    borderRadius: hp('4%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Boost></Boost>
                  <Text style={{ fontSize: 14, fontWeight: '600' }}>Boost</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Filter></Filter>
                </TouchableOpacity>
              </View>
            </View>
          );
        },
      }}
    >
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
