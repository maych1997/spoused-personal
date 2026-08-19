import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-date-picker';
import { COLOR } from '../../../utils/colors';
import { updateUserProfile } from '../../../services/saveUserService';

const Birthday = ({ navigation, setSteps }) => {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const calculateAge = birthDate => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleNext = async () => {
    try {
      if (!date) return;

      const age = calculateAge(date);

      // ❌ enforce minimum age rule
      if (age < 18) {
        Alert.alert('You must be at least 18 years old to continue');
        setLoading(false);
        return;
      }

      setLoading(true);

      await updateUserProfile({
        dob: date.toISOString(), // safer for Firebase
        age: age,
      });

      setSteps(3);
      navigation.push('Gender');
    } catch (error) {
      Alert.alert(error);
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
            When Is Your Birthday?
          </Animatable.Text>

          <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
            Please note that the minimum age to use Spoused is 18
          </Animatable.Text>

          <View
            style={{
              paddingTop: hp('2.5%'),
              gap: hp('2.5%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Animatable.View animation="fadeInUp" delay={200}>
              <DatePicker
                style={{ height: 400 }}
                date={date}
                onDateChange={setDate}
                mode="date"
              />
            </Animatable.View>
          </View>
        </View>

        {/* Age Display */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: hp('1%'),
          }}
        >
          <Text style={{ fontSize: 12, color: COLOR.grey }}>You're</Text>

          <Text
            style={{
              padding: hp('1%'),
              backgroundColor: COLOR.stepUnfinished,
              borderRadius: hp('10%'),
            }}
          >
            {calculateAge(date)} Years Old
          </Text>
        </View>

        {/* Continue Button */}
        <Animatable.View
          style={{ marginTop: hp('1%') }}
          animation="bounceIn"
          delay={800}
        >
          <TouchableOpacity
            onPress={() => {
              handleNext();
            }}
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: loading ? '#999' : COLOR.primary,
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
              {loading ? 'Saving...' : 'Next'}
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default Birthday;
