import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';

import Unselect from '../../../assets/icons/eclipse-empty-icon.svg';
import Select from '../../../assets/icons/selected-tick-eclipse.svg';
import Tick from '../../../assets/icons/tick.svg';
import { updateUserProfile } from '../../../services/saveUserService';

const Gender = ({ navigation, setSteps }) => {
  const [selected, setSelected] = useState(null);

  const genders = [
    { name: 'Male', id: 1 },
    { name: 'Female', id: 2 },
    { name: 'Other', id: 3 },
  ];

  const handleNext = () => {
    if (!selected) {
      Alert.alert('Please select your gender');
      return;
    }

    // optional: save to backend here
    updateUserProfile({ gender: selected });

    setSteps(4);
    navigation.push('Phone');
  };

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
            <Animatable.View animation="fadeInUp" delay={200} style={{ gap: hp('1%') }}>
              {genders.map((gender) => (
                <TouchableOpacity
                  key={gender.id}
                  onPress={() => setSelected(gender.id)}
                  style={{
                    backgroundColor: COLOR.greyShade,
                    padding: hp('2%'),
                    borderRadius: hp('0.8%'),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: 14, color: COLOR.secondary }}>
                    {gender.name}
                  </Text>

                  {gender.id === selected ? (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ position: 'absolute', zIndex: 1 }}>
                        <Tick />
                      </View>
                      <Select />
                    </View>
                  ) : (
                    <Unselect />
                  )}
                </TouchableOpacity>
              ))}
            </Animatable.View>
          </View>
        </View>

        {/* Continue Button */}
        <Animatable.View animation="bounceIn" delay={800}>
          <TouchableOpacity
            onPress={handleNext}
            style={{
              width: '100%',
              backgroundColor: COLOR.primary,
              height: hp('5.2%'),
              borderRadius: hp('10%'),
              justifyContent: 'center',
              alignItems: 'center',
              opacity: selected ? 1 : 0.6,
            }}
            disabled={!selected}
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