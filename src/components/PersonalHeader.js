import React from 'react';
import HeaderLogo from '../assets/vector/header-logo.svg';
import Back from '../assets/icons/back.svg';
import Question from '../assets/icons/question-mark-circle.svg';
import { TouchableOpacity, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../utils/colors';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
const PersonalHeader = ({ steps, setSteps, title, navigateBack}) => {
  const handleBack = () => {
  setSteps(prev => prev > 1 ? prev - 1 : prev);
  if(steps>1){
    navigateBack();
  }
};
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: COLOR.other,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        padding: hp('1.5%'),
      }}
    >
      <View style={{ display: 'flex', gap: wp('4%'), flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={handleBack}
        >
          <Back></Back>
        </TouchableOpacity>
        <Animatable.Text
          style={{ fontSize: hp('2%'), color: COLOR.secondary }}
          animation="fadeInRight"
          delay={200}
        >
          {title}
          {steps}
        </Animatable.Text>
      </View>
      <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
        <Question></Question>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalHeader;
