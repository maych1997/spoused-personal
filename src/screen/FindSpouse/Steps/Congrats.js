import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import Unselect from '../../../assets/icons/eclipse-empty-icon.svg';
import Select from '../../../assets/icons/selected-tick-eclipse.svg';
import Tick from '../../../assets/icons/tick.svg';
import Search from '../../../components/Search';

const Congrats = ({ navigation, setSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [selected, setSelected] = useState(0);
  const genders = [
    { name: 'Male', id: 1 },
    { name: 'Female', id: 2 },
    { name: 'Other', id: 3 },
  ];

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.other,
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      {/* Title */}
      <Animatable.Text
        animation="fadeInLeft"
        duration={800}
        style={{ fontSize: 24, fontWeight: 'bold' }}
      >
        Congratulations
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey, marginTop:hp('1%') }}>
        Your profile has been successfully created!
      </Animatable.Text>
      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        {/* Email Field */}
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%'), height: hp('55%') }}
        >
        <Image source={require('../../../assets/images/match.png')}>

        </Image>
        <View style={{alignItems:'center', marginTop:hp('3%')}}>
        <Animatable.Text
        animation="fadeInLeft"
        duration={800}
        style={{ fontSize: 24, fontWeight: 'bold' }}
      >
       You’re all set!
      </Animatable.Text>
      <Animatable.Text
        animation="fadeInLeft"
        duration={800}
        style={{ fontSize: 24, fontWeight: 'bold' }}
      >
        Your journey starts here
      </Animatable.Text>
      </View>
        </Animatable.View>
      </View>
      {/* Continue Button */}
      <Animatable.View
        style={{
          marginTop: hp('1%'),
          position: 'absolute',
          width: '100%',
          bottom: hp('2%'),
        }}
        animation="bounceIn"
        delay={800}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BottomTab');
          }}
          style={{
            width: '100%',
            backgroundColor: COLOR.primary,
            height: hp('5.2%'),
            borderRadius: hp('10%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: COLOR.secondary,
            }}
          >
            Find a Match
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Congrats;
