import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-date-picker';

const Birthday = ({ navigation, setSteps }) => {
    const [date, setDate] = useState(new Date());

  const [focusedField, setFocusedField] = useState(null);

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
            When Is Your Birthday?
          </Animatable.Text>
          <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
            Please note that the minimum age to use Spoused is 18
          </Animatable.Text>
          <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%'),alignItems:'center',justifyContent:'center'}}>
            {/* Email Field */}
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={{ gap: hp('1%') }}
            >
             <DatePicker
                style={{height:400}}
                date={date}
                onDateChange={setDate}
                mode="date" // "date" | "time" | "datetime"
              />
            </Animatable.View>
          </View>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',gap:hp('1%')}}>
          <Text style={{fontSize:12,color:COLOR.grey}}>You're</Text>
          <Text style={{padding:hp('1%'),backgroundColor:COLOR.stepUnfinished,borderRadius:hp('10%')}}>20 Years Old</Text>
        </View>
        {/* Continue Button */}
        <Animatable.View
          style={{ marginTop: hp('1%') }}
          animation="bounceIn"
          delay={800}
        >
          <TouchableOpacity
            onPress={() => {
              setSteps(3);
              navigation.navigate('Gender');
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

export default Birthday;
