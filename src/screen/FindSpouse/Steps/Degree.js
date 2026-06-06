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

const Degree = ({ navigation, setSpouseSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [selected, setSelected] = useState(0);
  const degrees = [
  { id: 1, name: 'High School Diploma' },
  { id: 2, name: 'Associate Degree' },
  { id: 3, name: 'Bachelor of Arts (BA)' },
  { id: 4, name: 'Bachelor of Science (BSc)' },
  { id: 5, name: 'Bachelor of Business Administration (BBA)' },
  { id: 6, name: 'Bachelor of Engineering (BEng)' },
  { id: 7, name: 'Bachelor of Education (BEd)' },
  { id: 8, name: 'Bachelor of Laws (LLB)' },
  { id: 9, name: 'Bachelor of Medicine, Bachelor of Surgery (MBBS/MD)' },
  { id: 10, name: 'Master of Arts (MA)' },
  { id: 11, name: 'Master of Science (MSc)' },
  { id: 12, name: 'Master of Business Administration (MBA)' },
  { id: 13, name: 'Master of Engineering (MEng)' },
  { id: 14, name: 'Master of Education (MEd)' },
  { id: 15, name: 'Master of Laws (LLM)' },
  { id: 16, name: 'Doctor of Philosophy (PhD)' },
  { id: 17, name: 'Doctor of Medicine (MD)' },
  { id: 18, name: 'Doctor of Dental Surgery (DDS)' },
  { id: 19, name: 'Doctor of Education (EdD)' },
  { id: 20, name: 'Doctor of Business Administration (DBA)' },
  { id: 21, name: 'Professional Certifications' },
  { id: 22, name: 'Diploma / Certificate Programs' },
  { id: 23, name: 'Other' },
];


  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

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
        What Is Your Highest Degree?
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select your highest level of education
      </Animatable.Text>
      <Search></Search>
      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        {/* Email Field */}
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%')}}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={degrees}
            contentContainerStyle={{ gap: hp('1%'), paddingBottom: hp('18%') }}
            renderItem={degree => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(degree?.item?.id);
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
                    {degree?.item?.name}
                  </Text>
                  {degree?.item?.id == selected ? (
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
            setSpouseSteps(3);
            navigation.push('Country');
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

export default Degree;
