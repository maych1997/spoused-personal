import React, { useState } from 'react';
import {
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

const Describe = ({ navigation, setSpouseSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [selected, setSelected] = useState(0);
  const ethnicities = [
    { id: 1, name: 'Arab' },
    { id: 2, name: 'Armenian' },
    { id: 3, name: 'Ashkenazi Jewish' },
    { id: 4, name: 'Basque' },
    { id: 5, name: 'Black / African' },
    { id: 6, name: 'Caribbean' },
    { id: 7, name: 'Central Asian' },
    { id: 8, name: 'Chinese' },
    { id: 9, name: 'East African' },
    { id: 10, name: 'Eastern European' },
    { id: 11, name: 'Filipino' },
    { id: 12, name: 'Hispanic / Latino' },
    { id: 13, name: 'Indigenous American / Native American' },
    { id: 14, name: 'Indigenous Australian / Aboriginal' },
    { id: 15, name: 'Japanese' },
    { id: 16, name: 'Korean' },
    { id: 17, name: 'Mediterranean' },
    { id: 18, name: 'Middle Eastern' },
    { id: 19, name: 'Māori' },
    { id: 20, name: 'North African' },
    { id: 21, name: 'Pacific Islander' },
    { id: 22, name: 'Persian / Iranian' },
    { id: 23, name: 'Punjabi' },
    { id: 24, name: 'Roma / Romani' },
    { id: 25, name: 'Scandinavian' },
    {
      id: 26,
      name: 'South Asian (e.g., Indian, Pakistani, Bangladeshi, Sri Lankan)',
    },
    {
      id: 27,
      name: 'Southeast Asian (e.g., Thai, Vietnamese, Cambodian, Burmese)',
    },
    { id: 28, name: 'Sub-Saharan African' },
    { id: 29, name: 'Turkish' },
    { id: 30, name: 'White / Caucasian' },
    { id: 31, name: 'West African' },
    { id: 32, name: 'Other' },
    { id: 33, name: 'Mixed / Multiracial' },
  ];

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';
  const handleNext = () => {
    if (!selected) {
      Alert.alert('Please select your ethnicity');
      return;
    }

    // optional: save to backend here
    updateUserProfile({ ethnicity: selected });

    setSpouseSteps(2);
    navigation.push('Degree');
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
        Which Of These Best Describes You?
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select your ethnicity
      </Animatable.Text>
      <Search></Search>
      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        {/* Email Field */}
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%') }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ethnicities}
            contentContainerStyle={{ gap: hp('1%'), paddingBottom: hp('22%') }}
            renderItem={ethnicity => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(ethnicity?.item?.id);
                  }}
                  style={{
                    backgroundColor: COLOR.greyShade,
                    padding: hp('2%'),
                    borderRadius: hp('0.8%'),
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: 14, color: COLOR.secondary }}>
                    {ethnicity?.item?.name}
                  </Text>
                  {ethnicity?.item?.id == selected ? (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <View style={{ position: 'absolute', zIndex: 1 }}>
                        <Tick></Tick>
                      </View>
                      <Select></Select>
                    </View>
                  ) : (
                    <Unselect></Unselect>
                  )}
                </TouchableOpacity>
              );
            }}
          ></FlatList>
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

export default Describe;
