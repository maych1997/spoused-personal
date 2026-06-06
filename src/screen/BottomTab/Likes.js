import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../utils/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FlatGrid } from 'react-native-super-grid';
import Flag from '../../assets/icons/flag.svg';
import { Swipeable } from 'react-native-gesture-handler';
import Like from '../../assets/icons/like.svg';
import Dislike from '../../assets/icons/dislike.svg';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';

const Likes = ({ navigation }) => {
  const data = [1, 2, 3, 4]; // later replace with real data
  const isFocused = useIsFocused();
  const [key, setKey] = useState(0);

  // 🔄 Whenever screen is focused, reset key → re-renders → replays animation
  useEffect(() => {
    if (isFocused) {
      setKey(prev => prev + 1);
    }
  }, [isFocused]);

  // Left Actions (when swipe right)
  const renderLeftActions = () => (
    <Animatable.View
      animation="fadeInLeft"
      duration={400}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Like />
    </Animatable.View>
  );

  // Right Actions (when swipe left)
  const renderRightActions = () => (
    <Animatable.View
      animation="fadeInRight"
      duration={400}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Dislike />
    </Animatable.View>
  );

  return (
    <>
      {!isFocused ? (
        <></>
      ) : (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: '2%' }}>
          {/* Heading */}
          <Animatable.View
            key={`heading-${key}`}
            animation="fadeInDown"
            duration={600}
          >
            <Text style={{ fontSize: 14, color: COLOR.stepUnfinished }}>
              These people are up for a chat with you! Like one of them to start
              a conversation.
            </Text>
          </Animatable.View>

          {/* Grid */}
          <FlatGrid
            key={key} // 👈 force re-render & replay animations
            data={data}
            itemDimension={wp('40%')}
            spacing={hp('2%')}
            contentContainerStyle={{ paddingBottom: hp('2%') }}
            renderItem={({ item, index }) => {
              return (
                <Animatable.View
                  animation="zoomIn"
                  duration={600}
                  delay={index * 150} // staggered animation
                >
                  <Swipeable
                    renderLeftActions={renderLeftActions}
                    renderRightActions={renderRightActions}
                    overshootLeft={false}
                    overshootRight={false}
                    containerStyle={{ borderRadius: 10 }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('ProfileDetails');
                      }}
                      activeOpacity={0.8}
                      style={{ alignItems: 'center' }}
                    >
                      {/* Card Image */}
                      <Animatable.Image
                        animation="fadeIn"
                        duration={800}
                        delay={200}
                        style={{
                          height: hp('28%'),
                          width: wp('43%'),
                          borderRadius: 10,
                        }}
                        source={require('../../assets/placeHolder/placeholder.jpg')}
                      />

                      {/* Top Row (Just Joined + Flag) */}
                      <Animatable.View
                        animation="fadeInDown"
                        duration={500}
                        delay={300}
                        style={{
                          position: 'absolute',
                          top: 5,
                          left: 5,
                          right: 5,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          padding: hp('0.5%'),
                        }}
                      >
                        <View
                          style={{
                            paddingHorizontal: hp('1%'),
                            paddingVertical: hp('0.5%'),
                            backgroundColor: COLOR.primary,
                            borderRadius: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '600',
                              color: '#000',
                            }}
                          >
                            Just Joined
                          </Text>
                        </View>
                        <Flag width={18} height={18} />
                      </Animatable.View>

                      {/* Bottom Info */}
                      <Animatable.View
                        animation="fadeInUp"
                        duration={600}
                        delay={400}
                        style={{ position: 'absolute', left: 10, bottom: 10 }}
                      >
                        <View style={{ flexDirection: 'row' }}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '700',
                              color: '#fff',
                            }}
                          >
                            John Doe,
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '500',
                              color: '#fff',
                              marginLeft: 4,
                            }}
                          >
                            26
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#fff',
                            marginTop: hp('0.5%'),
                          }}
                        >
                          Banker
                        </Text>
                        <Text
                          style={{
                            fontSize: 10,
                            color: '#fff',
                            marginTop: hp('0.5%'),
                          }}
                        >
                          Pakistani - Singapore
                        </Text>
                        <Text
                          style={{
                            fontSize: 10,
                            color: COLOR.stepUnfinished,
                            marginTop: hp('1%'),
                          }}
                        >
                          4 hours Ago
                        </Text>
                      </Animatable.View>
                    </TouchableOpacity>
                  </Swipeable>
                </Animatable.View>
              );
            }}
          />
        </View>
      )}
    </>
  );
};

export default Likes;
