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
  const handleBack = () => {
    setSpouseSteps(prev => (prev > 0 ? prev - 1 : 0));

    if (spouseSteps === 1) {
      return navigation.navigate('Spouse', {
        screen: 'Profession',
      });
    }

    if (spouseSteps === 2) {
      return navigation.navigate('Spouse', {
        screen: 'Describe',
      });
    }

    if (spouseSteps === 3) {
      return navigation.navigate('Spouse', {
        screen: 'Degree',
      });
    }

    if (spouseSteps === 4) {
      return navigation.navigate('Spouse', {
        screen: 'Country',
      });
    }

    if (spouseSteps === 5) {
      return navigation.navigate('Spouse', {
        screen: 'Height',
      });
    }
    if (spouseSteps === 6) {
      return navigation.navigate('Spouse', {
        screen: 'MaritalStatus',
      });
    }
    if (spouseSteps === 7) {
      return navigation.navigate('Spouse', {
        screen: 'Gender',
      });
    }
    if (spouseSteps === 8) {
      return navigation.navigate('Spouse', {
        screen: 'Smoke',
      });
    }
    if (spouseSteps === 9) {
      return navigation.navigate('Spouse', {
        screen: 'Children',
      });
    }
    if (spouseSteps === 10) {
      return navigation.navigate('Spouse', {
        screen: 'LookingFor',
      });
    }
    if (spouseSteps === 11) {
      return navigation.navigate('Spouse', {
        screen: 'Religion',
      });
    }
    if (spouseSteps === 12) {
      return navigation.navigate('Spouse', {
        screen: 'Drink',
      });
    }
    if (spouseSteps === 13) {
      return navigation.navigate('Spouse', {
        screen: 'Zodiac',
      });
    }
    if (spouseSteps === 14) {
      return navigation.navigate('Spouse', {
        screen: 'Details',
      });
    }
    if (spouseSteps === 15) {
      return navigation.navigate('Spouse', {
        screen: 'Personality',
      });
    }
    if (spouseSteps === 16) {
      return navigation.navigate('Spouse', {
        screen: 'Bio',
      });
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
        paddingHorizontal: hp('1.5%'),
        paddingBottom: hp('3%'),
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
        </Animatable.Text>
      </View>
      <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
        <Question></Question>
      </TouchableOpacity>
    </View>
  );
};

export default SpouseHeader;
