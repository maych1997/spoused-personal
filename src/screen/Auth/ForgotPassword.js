import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../utils/colors';
import * as Animatable from 'react-native-animatable';
import Footer from '../../components/Footer';

const ForgotPassword = ({navigation}) => {
  const [focusedField, setFocusedField] = useState(null);

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor:COLOR.other,paddingBottom:hp('4%') }}>
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
          Enter your Email to Forget Your Password
        </Animatable.Text>

        <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
          {/* Email Field */}
          <Animatable.View animation="fadeInUp" delay={200} style={{ gap: hp('1%') }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Email</Text>
            <TextInput
              placeholder="Email"
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={{
                padding: hp('0.5%'),
                height: hp('5%'),
                borderWidth: 1,
                borderColor: getBorderColor('email'),
                borderRadius: hp('1%'),
                backgroundColor: '#FAFAFA',
                fontSize: 14,
              }}
            />
          </Animatable.View>

          {/* Continue Button */}
          <Animatable.View style={{ marginTop: hp('5%') }} animation="bounceIn" delay={800}>
            <TouchableOpacity
              onPress={()=>{navigation.push('Authentication')}}
              style={{
                width: '100%',
                backgroundColor: COLOR.primary,
                height: hp('5.2%'),
                borderRadius: hp('10%'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLOR.secondary }}>
                Continue
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

export default ForgotPassword;
