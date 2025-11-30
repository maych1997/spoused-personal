import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import Unselect from '../../../assets/icons/eclipse-empty-icon.svg';
import Select from '../../../assets/icons/selected-tick-eclipse.svg';
import Tick from '../../../assets/icons/tick.svg';

const LookingFor = ({ navigation, setSteps }) => {
  const [selected, setSelected] = useState([]);

  const looking = [
    { name: 'Marriage', id: 1 },
    { name: 'Long Term Relationship', id: 2 },
    { name: 'Short Term Relationship', id: 3 },
    { name: 'Casual Dating', id: 4 },
    { name: 'Friendship', id: 5 },
    { name: 'Companionship', id: 6 },
    { name: 'Networking', id: 7 },
    { name: 'Open to Exploring', id: 8 },
    { name: 'Others', id: 9 },
  ];

  const toggleSelect = id => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

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
        What Are You Looking For?
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select the kind of match you are looking for.
      </Animatable.Text>

      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%'), height: hp('55%') }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={looking}
            contentContainerStyle={{ gap: hp('1%'), paddingBottom: hp('3.5%') }}
            renderItem={({ item }) => {
              const isSelected = selected.includes(item.id);
              return (
                <TouchableOpacity
                  onPress={() => toggleSelect(item.id)}
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
                  {isSelected ? (
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
            setSteps(10);
            navigation.navigate('Religion'); // adjust route as needed
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

export default LookingFor;
