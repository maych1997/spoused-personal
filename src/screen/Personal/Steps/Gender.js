import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
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

const Gender = ({ navigation, setSteps }) => {
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
        justifyContent: 'space-between',
        backgroundColor: COLOR.other,
        paddingTop: hp('3%'),
      }}
    >
      <Animatable.View
        animation="fadeInDown"
        duration={1000}
        style={{
          paddingLeft: hp('1.5%'),
          paddingRight: hp('1.5%'),
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        {/* Title */}
        <View>
          <Animatable.Text
            animation="fadeInLeft"
            duration={800}
            style={{ fontSize: 24, fontWeight: 'bold' }}
          >
            What Is Your Gender?
          </Animatable.Text>
          <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
            Please select your gender
          </Animatable.Text>
          <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
            {/* Email Field */}
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={{ gap: hp('1%') }}
            >
              {genders.map(gender => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(gender.id);
                    }}
                    style={{
                      backgroundColor: COLOR.greyShade,
                      padding: hp('2%'),
                      borderRadius: hp('0.8%'),
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ fontSize: 14, color: COLOR.secondary }}>
                      {gender.name}
                    </Text>
                    {gender.id == selected ? (
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <View style={{ position: 'absolute', zIndex: 1 }}>
                          <Tick></Tick>
                        </View>
                        <Select></Select>
                      </View>
                    ) : (
                      <Unselect></Unselect>
                    )}
                  </TouchableOpacity>
                );
              })}
            </Animatable.View>
          </View>
        </View>
        {/* Continue Button */}
        <Animatable.View
          style={{ marginTop: hp('1%') }}
          animation="bounceIn"
          delay={800}
        >
          <TouchableOpacity
            onPress={() => {
              setSteps(4);
              navigation.push('Phone');
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
              Next
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default Gender;
