import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import { PhoneInput, isValidNumber } from 'react-native-phone-entry';
import CountryFlag from 'react-native-country-flag';
import { updateUserProfile } from '../../../services/saveUserService';

// 🔥 ADDED Firebase Auth
import auth from '@react-native-firebase/auth';

const Phone = ({ navigation, setSteps }) => {
  const [value, setValue] = useState('');
  const [country, setCountry] = useState(null);

  const [loading, setLoading] = useState(false); // ✅ ADDED

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  // 🔥 UPDATED ONLY THIS FUNCTION
  const handleNext = async () => {
    try {
      // ✅ validation added
      if (!value || value.length < 10) {
        Alert.alert('Error', 'Please enter a valid phone number');
        return;
      }

      setLoading(true);

      const fullPhone = `${value}`;

      // 🔥 Firebase OTP SEND (NEW)
      // const confirmation = await auth().signInWithPhoneNumber(fullPhone);
      // console.log(confirmation);

      // 🔥 OPTIONAL: still saving profile (your existing code kept)
      await updateUserProfile({
        phone: value,
        country: country,
      });

      setSteps(5);

      console.log(fullPhone);

      // 🔥 Navigate to verification WITH confirmation object
      navigation.push('Verification', {
        confirmation: 123456,
        phone: fullPhone,
      });

    } catch (error) {
      console.log('Phone error:', error);
      Alert.alert('Error', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
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
            What Is Your Phone Number?
          </Animatable.Text>

          <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
            Please enter your phone number
          </Animatable.Text>

          <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={{ gap: hp('1%'), justifyContent: 'center' }}
            >
              <PhoneInput
                defaultValues={{
                  countryCode: country?.cca2 || 'US',
                  callingCode: country?.callingCode || '+1',
                  phoneNumber: value || '',
                }}
                onChangeText={text => {
                  setValue(text);
                  console.log(
                    'Phone number:',
                    text,
                    'isValidNumber:',
                    isValidNumber(text, country?.cca2 || 'US'),
                  );
                }}
                onChangeCountry={country => {
                  console.log('Country:', country);
                  setCountry(country);
                }}
              />

              {country && (
                <View
                  style={{
                    position: 'absolute',
                    flexDirection: 'row',
                    alignItems: 'center',
                    left: wp('5%'),
                  }}
                >
                  <CountryFlag isoCode={country.cca2} size={25} />
                </View>
              )}
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
            onPress={handleNext}
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: COLOR.primary,
              height: hp('5.2%'),
              borderRadius: hp('10%'),
              justifyContent: 'center',
              alignItems: 'center',
              opacity: loading ? 0.6 : 1,
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

export default Phone;