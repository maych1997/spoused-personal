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
const SpouseHeader = ({ spouseSteps, setSpouseSteps, navigation, title }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: COLOR.other,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: hp('1.5%'),
        paddingBottom: hp('3%'),
      }}
    >
      <View style={{ display: 'flex', gap: wp('4%'), flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            setSpouseSteps(spouseSteps - 1);
            if (spouseSteps == 0) {
              navigation.goBack();
            } else if (spouseSteps == 15) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Personality' },
              });
            } else if (spouseSteps == 14) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Details' },
              });
            } else if (spouseSteps == 13) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Zodiac' },
              });
            } else if (spouseSteps == 12) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Drink' },
              });
            } else if (spouseSteps == 11) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Religion' },
              });
            } else if (spouseSteps == 10) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'LookingFor' },
              });
            } else if (spouseSteps == 9) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Children' },
              });
            } else if (spouseSteps == 8) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Smoke' },
              });
            } else if (spouseSteps == 7) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Gender' },
              });
            } else if (spouseSteps == 6) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'MaritalStatus' },
              });
            } else if (spouseSteps == 5) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Height' },
              });
            } else if (spouseSteps == 4) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Country' },
              });
            } else if (spouseSteps == 3) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Degree' },
              });
            } else if (spouseSteps == 2) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Describe' },
              });
            } else if (spouseSteps == 1) {
              navigation.push('PersonalStack', {
                screen: 'Spouse',
                params: { screen: 'Profession' },
              });
            }
          }}
        >
          <Back></Back>
        </TouchableOpacity>
        <Animatable.Text
          style={{ fontSize: hp('2%'), color: COLOR.secondary }}
          animation="fadeInRight"
          delay={200}
        >
          {title}
        </Animatable.Text>
      </View>
      <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
        <Question></Question>
      </TouchableOpacity>
    </View>
  );
};

export default SpouseHeader;
