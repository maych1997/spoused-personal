import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../utils/colors';
import Logo from '../../assets/vector/spoused_logo.svg';
import Title from '../../assets/vector/spoused_title.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ProgressBar } from 'react-native-paper';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Apple from '../../assets/vector/apple.svg';
import Google from '../../assets/vector/google.svg';
import Facebook from '../../assets/vector/facebook.svg';

const Splash = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 sec
    const steps = 100; // jitni smoothness chahiye
    const intervalTime = duration / steps; // har step ka time

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setProgress(current / steps); // 0 → 1
      if (current >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLOR.primary,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <View style={{ flexDirection: 'row', gap: hp('2%') }}>
        {Array.from({ length: 5 }).map((_, colIndex) => {
          // Random alignment har column ke liye
          const alignments = ['flex-start', 'center', 'flex-end'];
          const randomAlign =
            alignments[Math.floor(Math.random() * alignments.length)];

          return (
            <View
              key={colIndex}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: randomAlign,
                gap: '2%',
                height: 250,
                display: progress != 1 ? 'none' : 'flex',
              }}
            >
              {Array.from({ length: 3 }).map((_, boxIndex) => (
                <Animatable.View
                  key={boxIndex}
                  animation={progress == 1 ? 'slideInDown' : ''}
                  duration={800}
                  delay={boxIndex * 300} // staggered delay
                  direction="alternate" // back and forth
                  style={{
                    height: 98,
                    width: 73,
                    borderWidth: 2,
                    borderColor: COLOR.other,
                    borderRadius: 10,
                    position: 'relative',
                    top: -100,
                  }}
                />
              ))}
            </View>
          );
        })}
      </View>
      <Animatable.View
        animation={progress == 1 ? 'zoomOut' : ''}
        style={{
          flex: 0.98,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          display: progress == 1 ? 'none' : 'flex',
        }}
      >
        <Logo width={wp('100%')} height={hp('10%')}></Logo>
        <Title width={wp('50%')} height={hp('10%')}></Title>
      </Animatable.View>
      <View
        style={{
          flex: 0.98,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: progress == 1 ? 'flex' : 'none',
        }}
      >
        <View style={{ flexDirection: 'row', display: 'flex', gap: wp('2%') }}>
          <Animatable.View animation={progress == 1 ? 'fadeInLeft' : ''}>
            <Logo width={wp('15%')} height={hp('10%')}></Logo>
          </Animatable.View>
          <Animatable.View animation={progress == 1 ? 'fadeInRight' : ''}>
            <Title width={wp('50%')} height={hp('10%')}></Title>
          </Animatable.View>
        </View>
        <Animatable.Text
          animation={progress == 1 ? 'fadeInUp' : ''}
          delay={100}
          style={{ fontSize: 30, fontWeight: 'bold', marginTop: hp('2%') }}
        >
          Date with Purpose!
        </Animatable.Text>
        <View style={{ paddingTop: hp('10%'), gap: hp('2%') }}>
          <Animatable.View
            animation={progress == 1 ? 'fadeInUp' : ''}
            delay={progress == 1 ? 200 : 0}
          >
            <TouchableOpacity
              style={{
                height: hp('5.2%'),
                width: wp('90%'),
                backgroundColor: COLOR.secondary,
                borderRadius: hp('10%'),
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
                gap: wp('2%'),
              }}
            >
              <Apple></Apple>
              <Text
                style={{
                  color: COLOR.other,
                  fontSize: 14,
                  fontWeight: 'medium',
                }}
              >
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={progress == 1 ? 'fadeInUp' : ''}
            delay={progress == 1 ? 300 : 0}
          >
            <TouchableOpacity
              style={{
                height: hp('5.2%'),
                width: wp('90%'),
                backgroundColor: COLOR.other,
                borderRadius: hp('10%'),
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
                gap: wp('2%'),
              }}
            >
              <Google></Google>
              <Text
                style={{
                  color: COLOR.secondary,
                  fontSize: 14,
                  fontWeight: 'medium',
                }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={progress == 1 ? 'fadeInUp' : ''}
            delay={progress == 1 ? 400 : 0}
          >
            <TouchableOpacity
              style={{
                height: hp('5.2%'),
                width: wp('90%'),
                backgroundColor: '#167EE6',
                borderRadius: hp('10%'),
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
                gap: wp('2%'),
              }}
            >
              <Facebook></Facebook>
              <Text
                style={{
                  color: COLOR.other,
                  fontSize: 14,
                  fontWeight: 'medium',
                }}
              >
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View
            animation={progress == 1 ? 'fadeInUp' : ''}
            delay={progress == 1 ? 500 : 0}
          >
            <TouchableOpacity onPress={()=>{navigation.push('AuthStack')}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: COLOR.secondary,
                  textDecorationLine: 'underline',
                  textAlign: 'center',
                }}
              >
                Continue With Email
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
      <View
        style={{
          display: progress == 1 ? 'none' : 'flex',
          flex: 0.02,
          paddingBottom: hp('0.1%'),
          width: wp('90%'),
        }}
      >
        <ProgressBar color="#fff" animatedValue={progress}></ProgressBar>
      </View>
      <View
        style={{
          alignItems: 'center',
          display: progress == 1 ? 'flex' : 'none',
        }}
      >
        <Animatable.Text
          style={{ fontSize: 12, color: '#00000066', opacity: 0 }}
          animation={progress == 1 ? 'fadeInUp' : ''}
          delay={progress == 1 ? 600 : 0}
        >
          By Countinuing you agree to our
        </Animatable.Text>
        <Animatable.View
          animation={progress == 1 ? 'fadeInUp' : ''}
          delay={progress == 1 ? 600 : 0}
          style={{ display: 'flex', flexDirection: 'row', gap: wp('2%') }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}
            >
              TERMS OF SERVICE
            </Text>
          </TouchableOpacity>
          <Text>&</Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}
            >
              PRIVACY POLICY
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
