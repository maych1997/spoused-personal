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

const Profession = ({ navigation, setSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [selected, setSelected] = useState(0);
  const professions = [
    { id: 1, name: 'Accountant' },
    { id: 2, name: 'Actor' },
    { id: 3, name: 'Architect' },
    { id: 4, name: 'Artist' },
    { id: 5, name: 'Athlete' },
    { id: 6, name: 'Baker' },
    { id: 7, name: 'Barber' },
    { id: 8, name: 'Bartender' },
    { id: 9, name: 'Chef' },
    { id: 10, name: 'Civil Engineer' },
    { id: 11, name: 'Construction Worker' },
    { id: 12, name: 'Customer Service Representative' },
    { id: 13, name: 'Data Scientist' },
    { id: 14, name: 'Dentist' },
    { id: 15, name: 'Doctor' },
    { id: 16, name: 'Electrician' },
    { id: 17, name: 'Farmer' },
    { id: 18, name: 'Firefighter' },
    { id: 19, name: 'Graphic Designer' },
    { id: 20, name: 'Journalist' },
    { id: 21, name: 'Judge' },
    { id: 22, name: 'Lawyer' },
    { id: 23, name: 'Librarian' },
    { id: 24, name: 'Mechanic' },
    { id: 25, name: 'Musician' },
    { id: 26, name: 'Nurse' },
    { id: 27, name: 'Paramedic' },
    { id: 28, name: 'Pharmacist' },
    { id: 29, name: 'Photographer' },
    { id: 30, name: 'Pilot' },
    { id: 31, name: 'Plumber' },
    { id: 32, name: 'Police Officer' },
    { id: 33, name: 'Politician' },
    { id: 34, name: 'Professor' },
    { id: 35, name: 'Real Estate Agent' },
    { id: 36, name: 'Scientist' },
    { id: 37, name: 'Social Worker' },
    { id: 38, name: 'Software Developer' },
    { id: 39, name: 'Teacher' },
    { id: 40, name: 'Truck Driver' },
    { id: 41, name: 'Veterinarian' },
    { id: 42, name: 'Waiter/Waitress' },
    { id: 43, name: 'Writer' },
    { id: 44, name: 'Zoologist' },
  ];

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.other,
        paddingBottom: hp('3%'),
        paddingTop: hp('3%'),
      }}
    >
      {/* Title */}
      <Animatable.Text
        animation="fadeInLeft"
        duration={800}
        style={{ fontSize: 24, fontWeight: 'bold' }}
      >
        What Is Your Profession?
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select your profession
      </Animatable.Text>
      <Search></Search>
      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        {/* Email Field */}
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%'), height: hp('55%') }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={professions}
            contentContainerStyle={{ gap: hp('1%') }}
            renderItem={profession => {
              console.log(profession);
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(profession?.item?.id);
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
                    {profession?.item?.name}
                  </Text>
                  {profession?.item?.id == selected ? (
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
          marginTop: hp('1%'),
          position: 'absolute',
          width: '100%',
          bottom: hp('2%'),
        }}
        animation="bounceIn"
        delay={800}
      >
        <TouchableOpacity
          onPress={() => {
            setSteps(1);
            navigation.navigate('Describe');
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

export default Profession;
