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

const MaritalStatus = ({ navigation, setSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [selected, setSelected] = useState(0);
  const maritalStatus = [
    { name: 'Never Married', id: 1 },
    { name: 'Divorced', id: 2 },
    { name: 'Seperated', id: 3 },
    { name: 'Annulled', id: 4 },
    { name: 'Widowed', id: 5 },
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
        What Is Your Marital Status
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select your marital status
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
            data={maritalStatus}
            contentContainerStyle={{ gap: hp('1%'), paddingBottom: hp('3.5%') }}
            renderItem={country => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(country?.item?.id);
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
                    {country?.item?.name}
                  </Text>
                  {country?.item?.id == selected ? (
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
            setSteps(6);
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
    </View>
  );
};

export default MaritalStatus;
