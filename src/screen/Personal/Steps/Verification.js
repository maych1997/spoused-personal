import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import OtpInput from '../../../components/OtpInput';
import Footer from '../../../components/Footer';
const Verification = ({ navigation, route }) => {
  console.log(route.params)
  const [otp,setOtp]=useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLOR.other,
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
          Phone Verification
        </Animatable.Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: wp('1%') }}>
          <Animatable.Text
            animation="fadeInLeft"
            duration={800}
            style={{ fontSize: 12, fontWeight: 'bold', color: COLOR.grey }}
          >
            Please enter the verification code sent to
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInLeft"
            duration={800}
            style={{ fontSize: 12, fontWeight: 'bold', color: COLOR.primary }}
          >
            {route?.params?.phone}
          </Animatable.Text>
        </View>
        <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
          {/* Email Field */}
          <OtpInput
            length={6}
            onChangeOtp={code => {
              setOtp(code);
            }}
          />

          {/* Continue Button */}
          <Animatable.View
            style={{ marginTop: hp('5%') }}
            animation="bounceIn"
            delay={800}
          >
            <TouchableOpacity
              onPress={() => {
                if(otp==route?.params?.confirmation){
                  navigation.push('Spouse');
                }
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
            Did not get the OTP?
          </Animatable.Text>
          <TouchableOpacity
            onPress={() => {
              navigation.push('SetPassword');
            }}
          >
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
              Resend OTP
            </Animatable.Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>

      {/* Footer Terms */}
      <Footer></Footer>
    </View>
  );
};

export default Verification;
