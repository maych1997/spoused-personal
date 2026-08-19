import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import Unselect from '../../../assets/icons/eclipse-empty-icon.svg';
import Select from '../../../assets/icons/selected-tick-eclipse.svg';
import Tick from '../../../assets/icons/tick.svg';
import { updateUserProfile } from '../../../services/saveUserService';

const Religion = ({ navigation, setSpouseSteps }) => {
  const [selected, setSelected] = useState(0);

  const religion = [
    { name: 'Islam', id: 1 },
    { name: 'Christianity', id: 2 },
    { name: 'Hinduism', id: 3 },
    { name: 'Buddhism', id: 4 },
    { name: 'Judaism', id: 5 },
    { name: 'Sikhism', id: 6 },
    { name: 'Baháʼí Faith', id: 7 },
    { name: 'Jainism', id: 8 },
    { name: 'Shinto', id: 9 },
    { name: 'Taoism', id: 10 },
    { name: 'Zoroastrianism', id: 11 },
    { name: 'Other / Indigenous', id: 12 },
  ];
  const handleNext = () => {
    if (!selected) {
      Alert.alert('Please select the religion');
      return;
    }

    // optional: save to backend here
    updateUserProfile({ religion: selected });

    setSpouseSteps(11);
    navigation.push('Drink'); // adjust next screen
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
        What is Your Religion?
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select the religion that you identify with.
      </Animatable.Text>

      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%') }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={religion}
            contentContainerStyle={{ gap: hp('1%'), paddingBottom: hp('12%') }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelected(item.id)}
                  style={{
                    backgroundColor: COLOR.greyShade,
                    padding: hp('2%'),
                    borderRadius: hp('0.8%'),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: 14, color: COLOR.secondary }}>
                    {item.name}
                  </Text>
                  {item.id === selected ? (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <View style={{ position: 'absolute', zIndex: 1 }}>
                        <Tick />
                      </View>
                      <Select />
                    </View>
                  ) : (
                    <Unselect />
                  )}
                </TouchableOpacity>
              );
            }}
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

export default Religion;
