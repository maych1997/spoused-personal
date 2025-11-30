import React from 'react';
import HeaderLogo from '../assets/vector/header-logo.svg';
import Back from '../assets/icons/back.svg';
import Question from '../assets/icons/question-mark-circle.svg';
import { TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../utils/colors';

const AuthHeader = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.other,
        display:'flex',
        flexDirection:'row',
        padding:hp('1.5%')
      }}
    >
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Back></Back>
      </TouchableOpacity>
      <HeaderLogo></HeaderLogo>
      <TouchableOpacity>
        <Question></Question>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthHeader;
