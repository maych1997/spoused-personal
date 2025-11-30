import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../utils/colors';
import Spouse from '../../stack/SubStack/Spouse';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const SpouseInfo = ({labels,steps,setSteps}) => {
  const { width } = Dimensions.get('window');

  return (
    <View
      style={{
        backgroundColor: COLOR.other,
        flex: 1,
        padding: hp('2%'),
        display: 'flex',
      }}
    >
      {steps==16?<></>:<View
        style={{
          flexDirection: 'row',
          gap: wp('0.5%'),
          justifyContent: 'center',
        }}
      >
        {labels.map(item => {
          return (
            <View
              style={{
                width: width / hp('2.3%'),
                height: hp('0.5%'),
                borderRadius: 10,
                backgroundColor: item <= steps ? COLOR.primary : COLOR.grey,
              }}
            ></View>
          );
        })}
      </View>}
      <Spouse setSteps={setSteps}></Spouse>
    </View>
  );
};

export default SpouseInfo;
