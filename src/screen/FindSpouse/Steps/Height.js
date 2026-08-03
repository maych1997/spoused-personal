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
import { RulerPicker } from 'react-native-ruler-picker';
import { updateUserProfile } from '../../../services/saveUserService';

const Height = ({ navigation, setSpouseSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [selected,setSelected]=useState('cm');
  const [height,setHeight]=useState(0);
  const handleNext = () => {
    if (!selected) {
      Alert.alert('Please select your height');
      return;
    }

    // optional: save to backend here
    updateUserProfile({ height: height+''+selected });

    setSpouseSteps(5);
    navigation.push('MaritalStatus');
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
        How Tall Are You?
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select your height
      </Animatable.Text>
      <View
        style={{
          height: hp('6%'),
          backgroundColor: COLOR.greySecondaryShade,
          marginBottom: hp('7%'),
          marginTop: hp('7%'),
          borderRadius: 20,
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          padding:hp('0.5%')
        }}
      >
        <TouchableOpacity onPress={()=>{setSelected('cm')}} style={{ backgroundColor: selected=='cm'?COLOR.primary:COLOR.greySecondaryShade,width:'50%',alignItems:'center',justifyContent:'center',borderRadius:20 }}>
          <Text style={{fontSize:14}}>Centimeters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setSelected('in')}} style={{ backgroundColor: selected=='in'?COLOR.primary:COLOR.greySecondaryShade,width:'50%',alignItems:'center',justifyContent:'center',borderRadius:20 }}>
          <Text style={{fontSize:14}}>Inches</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        {/* Email Field */}
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{
            gap: hp('1%'),
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <RulerPicker
            min={0}
            max={240}
            step={1}
            indicatorColor={COLOR.primary}
            height={'auto'}
            shortStepHeight={hp('2.6%')}
            longStepHeight={hp('6.5%')}
            fractionDigits={0}
            initialValue={0}
            onValueChange={number => console.log(number)}
            onValueChangeEnd={number => setHeight(number)}
            unit={selected}
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

export default Height;
