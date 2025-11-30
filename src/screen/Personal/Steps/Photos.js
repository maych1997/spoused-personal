import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import ToggleSwitch from 'toggle-switch-react-native';
import { FlatGrid } from 'react-native-super-grid';
import Delete from '../../../assets/icons/delete.svg';
import AddIcon from '../../../assets/icons/add-icon.svg';

const Photos = ({ navigation, setSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const data = [1, 2, 3, 4, 'extra'];

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLOR.other,
        paddingBottom:hp('3%'),
        paddingTop:hp('3%'),
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
            Add Your Photos
          </Animatable.Text>
          <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
            Please add at least 2 clear images of yourself
          </Animatable.Text>
          <View
            style={{
              paddingTop: hp('2.5%'),
              gap: hp('2.5%'),
              justifyContent: 'space-between',
            }}
          >
            {/* Email Field */}
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={{
                gap: hp('1%'),
                backgroundColor: '#F5F5F5',
                padding: hp('2%'),
                borderRadius: hp('1.2%'),
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ gap: hp('0.8%') }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: COLOR.secondary,
                  }}
                >
                  Blur Photos
                </Text>
                <Text style={{ fontSize: 14, color: COLOR.secondary }}>
                  Blur my photos to others
                </Text>
              </View>
              <View>
                <ToggleSwitch
                  isOn={false}
                  onColor={COLOR.primary}
                  offColor={COLOR.grey}
                  labelStyle={{ color: 'black', fontWeight: '900' }}
                  size="medium"
                  onToggle={isOn => console.log('changed to : ', isOn)}
                />
              </View>
            </Animatable.View>
          </View>
        </View>
        <FlatGrid
          contentContainerStyle={{ justifyContent: 'space-between' }}
          data={data} // 👈 extra add kiya
          renderItem={({ item }) => {
            if (item === 'extra') {
              return (
                <TouchableOpacity
                  style={{
                    height: hp('20%'),
                    width: '100%',
                    borderRadius: hp('1.2%'),
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLOR.grey,
                  }}
                >
                  <Text style={{fontSize:hp('4%'),fontWeight:'500',position:'absolute',zIndex:1}}>+</Text>
                  <AddIcon></AddIcon>
                </TouchableOpacity>
              );
            }

            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  style={{
                    height: hp('20%'),
                    width: '100%',
                    borderRadius: hp('1.2%'),
                  }}
                  source={require('../../../assets/placeHolder/placeholder.jpg')}
                />
                <TouchableOpacity style={{ position: 'absolute' }}>
                  <Delete />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        {/* Continue Button */}
        <Animatable.View
          style={{ marginTop: hp('1%') }}
          animation="bounceIn"
          delay={800}
        >
          <TouchableOpacity
              onPress={()=>{setSteps(2);
              navigation.navigate('Birthday');}}
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

export default Photos;
