import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';

const Name = ({ navigation, setSteps }) => {
  const [focusedField, setFocusedField] = useState(null);

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
            What Is Your Name?
          </Animatable.Text>
          <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
            Please enter your full name as it appears on your national ID.
          </Animatable.Text>
          <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
            {/* Email Field */}
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={{ gap: hp('1%') }}
            >
              <TextInput
                placeholder="Name"
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={{
                  padding: hp('0.5%'),
                  height: hp('5%'),
                  borderWidth: 1,
                  borderColor: getBorderColor('name'),
                  borderRadius: hp('1%'),
                  backgroundColor: '#FAFAFA',
                  fontSize: 14,
                }}
              />
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
              setSteps(1);
              navigation.push('Photos');
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

export default Name;
