import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import Unselect from '../../../assets/icons/eclipse-empty-icon.svg';
import Select from '../../../assets/icons/selected-tick-eclipse.svg';
import Tick from '../../../assets/icons/tick.svg';
import Search from '../../../components/Search';
import { updateUserProfile } from '../../../services/saveUserService';

const Bio = ({ navigation, setSpouseSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [bio, setBio] = useState(null);

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';
  const handleNext = () => {
    if (bio.length == 0) {
      Alert.alert('Please add your bio');
      return;
    }

    // optional: save to backend here
    updateUserProfile({ bio: bio });

    setSpouseSteps(16);
    navigation.push('Congrats');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.other,
        paddingHorizontal: hp('1.5%'),
        paddingTop: hp('3%'),
      }}
    >
      {/* Title */}
      <Animatable.Text
        animation="fadeInLeft"
        duration={800}
        style={{ fontSize: 24, fontWeight: 'bold' }}
      >
        Add Bio
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Describe yourself in a few short sentences
      </Animatable.Text>
      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        {/* Email Field */}
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%'), height: hp('55%') }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: COLOR.stepUnfinished,
              borderRadius: 10,
              backgroundColor: COLOR.greySecondaryShade,
              fontSize: 14,
              padding: hp('2%'),
              height: hp('55%'),
            }}
            onChangeText={bio => {
              setBio(bio);
            }}
            multiline={true} // This enables multi-line input
            placeholder="Write here..."
            textAlignVertical="top" // Aligns text to the top on both iOS and Android
          />
        </Animatable.View>
      </View>
      {/* Continue Button */}
      <Animatable.View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          alignSelf: 'center',
        }}
        animation="bounceIn"
        delay={800}
      >
        <TouchableOpacity
          onPress={() => {
            handleNext();
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
    </View>
  );
};

export default Bio;
