import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../utils/colors';
import * as Animatable from 'react-native-animatable';
import OtpInput from '../../components/OtpInput';
import Footer from '../../components/Footer';
const Authentication = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLOR.other,
        paddingBottom:hp('4%')
      }}
    >
      <Animatable.View
        animation="fadeInDown"
        duration={1000}
        style={{ padding: hp('1.5%') }}
      >
        {/* Title */}
        <Animatable.Text
          animation="fadeInLeft"
          duration={800}
          style={{ fontSize: 24, fontWeight: 'bold' }}
        >
          Authentication Code
        </Animatable.Text>
        <View style={{display:'flex',flexDirection:'row',gap:wp('1%')}}>
        <Animatable.Text
          animation="fadeInLeft"
          duration={800}
          style={{ fontSize: 12, fontWeight: 'bold', color: COLOR.grey }}
        >
          Enter the one-time code sent to 
        </Animatable.Text>
        <Animatable.Text
          animation="fadeInLeft"
          duration={800}
          style={{ fontSize: 12, fontWeight: 'bold', color: COLOR.primary }}
        >
          test123@gmail.com
        </Animatable.Text>
        </View>
        <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
          {/* Email Field */}
          <OtpInput
            length={6}
            onChangeOtp={code => console.log('OTP:', code)}
          />

          {/* Continue Button */}
          <Animatable.View
            style={{ marginTop: hp('5%') }}
            animation="bounceIn"
            delay={800}
          >
            <TouchableOpacity
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
                Continue
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.Text
            animation="fadeInLeft"
            duration={800}
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: COLOR.grey,
              textAlign: 'center',
            }}
          >
            Didn’t receive an authentication code?
          </Animatable.Text>
          <TouchableOpacity onPress={()=>{navigation.push('SetPassword')}}>
            <Animatable.Text
              animation="fadeInLeft"
              duration={800}
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: COLOR.primary,
                textAlign: 'center',
              }}
            >
              Resend Code
            </Animatable.Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>

      {/* Footer Terms */}
      <Footer></Footer>
    </View>
  );
};

export default Authentication;
