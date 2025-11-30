import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import PhoneInput from 'react-native-phone-number-input';
import CountryFlag from 'react-native-country-flag';

const Phone = ({ navigation, setSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const phoneInput = useRef(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [country, setCountry] = useState(null);
  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLOR.other,
        paddingBottom: hp('3%'),
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
            {/* Email Field */}
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={{ gap: hp('1%'),justifyContent:"center"}}
            >
              <PhoneInput
                containerStyle={{width:'100%'}}
                disableArrowIcon={true}
                ref={phoneInput}
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                defaultValue={value}
                layout="first"
                withShadow
                autoFocus
                defaultCode="DM"
                onChangeCountry={c => {
                  setCountry(c), console.log(c);
                }} // ✅ selected country ka object milega
              />
              {country && (
                <View
                  style={{
                    position:'absolute',
                    flexDirection: 'row',
                    alignItems: 'center',
                    left:wp('5%')
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
            onPress={() => {
              setSteps(5);
              navigation.navigate('Verification');
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

export default Phone;
