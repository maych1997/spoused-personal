import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../utils/colors';
import * as Animatable from 'react-native-animatable';
import Footer from '../../components/Footer';

const SetPassword = ({ navigation }) => {
  const [focusedField, setFocusedField] = useState(null);

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLOR.other,
        paddingBottom:hp('4%'),
      }}
    >
      <Animatable.View
        animation="fadeInDown"
        duration={1000}
        style={{ padding: hp('1.5%') }}
      >
        <Animatable.Text
          animation="fadeInLeft"
          duration={800}
          style={{ fontSize: 24, fontWeight: 'bold' }}
        >
          Set New Password
        </Animatable.Text>
        <Animatable.Text
          animation="fadeInLeft"
          duration={800}
          style={{ fontSize: 12, fontWeight: 'bold', color: COLOR.grey, paddingTop:hp('0.5%') }}
        >
          Your password must include at least one uppercase letter, one number,
          and one special character
        </Animatable.Text>
        <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
          {/* Password Field */}
          <Animatable.View
            animation="fadeInUp"
            delay={400}
            style={{ gap: hp('1%') }}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              style={{
                padding: hp('0.5%'),
                height: hp('5%'),
                borderWidth: 1,
                borderColor: getBorderColor('password'),
                borderRadius: hp('1%'),
                backgroundColor: '#FAFAFA',
                fontSize: 14,
              }}
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInUp"
            delay={400}
            style={{ gap: hp('1%') }}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
              Confirm Password
            </Text>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              style={{
                padding: hp('0.5%'),
                height: hp('5%'),
                borderWidth: 1,
                borderColor: getBorderColor('password'),
                borderRadius: hp('1%'),
                backgroundColor: '#FAFAFA',
                fontSize: 14,
              }}
            />
          </Animatable.View>

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
                Change Password
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </Animatable.View>

      {/* Footer Terms */}
     <Footer></Footer>
    </View>
  );
};

export default SetPassword;
