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

const Children = ({ navigation, setSteps }) => {
  const [selected, setSelected] = useState(0);

  // Updated options -> Yes / No / Maybe
  const options = [
    { name: 'Yes', id: 1 },
    { name: 'No', id: 2 },
    { name: 'Maybe', id: 3 },
  ];

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
        Do You Want To Have Children?
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select one of the following options.
      </Animatable.Text>

      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%'), height: hp('55%') }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={options}
            contentContainerStyle={{ gap: hp('1%'), paddingBottom: hp('3.5%') }}
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
            setSteps(9);
            navigation.navigate('LookingFor'); // update next step screen
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

export default Children;
