import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Likes from '../Likes';
import ProfileDetails from '../ProfileDetails';
import Rewind from '../../../assets/icons/rewind.svg';
import Filter from '../../../assets/icons/filter.svg';
import Boost from '../../../assets/icons/boost.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../../utils/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const Stack = createNativeStackNavigator();

const LikeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Likes"
      screenOptions={{ headerShown: true,header: ({navigation,route}) => {
        console.log(route);
            return (
              <SafeAreaView
                style={{
                  backgroundColor: COLOR.other,
                  display: 'flex',
                  flexDirection: 'row',
                  paddingLeft: wp('5%'),
                  paddingRight: wp('5%'),
                  justifyContent: 'space-between',
                  alignItems:'center',
                }}
              >
                <View>
                  <TouchableOpacity onPress={()=>{if(navigation.canGoBack()){
                    navigation.goBack();
                  }}}>
                    {navigation.canGoBack() && route.name!='Likes'?<Rewind></Rewind>:<Filter></Filter>}
                  </TouchableOpacity>
                </View>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:wp('1%')}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Liked You</Text>
                    <View style={{alignItems:'flex-start'}}>
                    <Text style={{paddingTop:hp('0.5%'),paddingBottom:hp('0.5%'),paddingRight:wp('2%'),paddingLeft:wp('2%'),borderRadius:20,backgroundColor:COLOR.primary,fontSize:12}}>99+</Text>
                    </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: wp('2%'),
                  }}
                >
                </View>
              </SafeAreaView>
            );
          }}}
    >
     <Stack.Screen name='Likes' component={Likes}></Stack.Screen>
     <Stack.Screen name='ProfileDetails' component={ProfileDetails}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default LikeStack;
