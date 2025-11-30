import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Message from '../../assets/icons/message.svg';
import Flag from '../../assets/icons/flag.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../utils/colors';
import Like from '../../assets/icons/like.svg';
import Dislike from '../../assets/icons/dislike.svg';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const cards = [
    { id: 1, src: require('../../assets/placeHolder/placeholder.jpg') },
    { id: 2, src: require('../../assets/placeHolder/placeholder.jpg') },
    { id: 3, src: require('../../assets/placeHolder/placeholder.jpg') },
    { id: 4, src: require('../../assets/placeHolder/placeholder.jpg') },
  ];

  const isFocused = useIsFocused();
  const [key, setKey] = useState(0);

  // 🔄 Restart animations whenever screen is focused
  useEffect(() => {
    if (isFocused) {
      setKey(prev => prev + 1);
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Swiper
          key={key} // 👈 reset swiper & animations on focus
          stackScale={3}
          cards={cards}
          onTapCard={() => {
            navigation.push('ProfileDetails');
          }}
          renderCard={(card, index) => {
            return (
              <Animatable.View
                key={`${key}-${card.id}`} // 👈 re-trigger Animatable
                animation="fadeInUp"
                duration={600}
                easing="ease-out-cubic"
                style={{
                  width: 'auto',
                  height: '90%',
                  display: 'flex',
                  overflow: 'hidden',
                }}
              >
                {/* Animated Image */}
                <Animatable.Image
                  animation="zoomIn"
                  duration={800}
                  delay={200}
                  style={styles.cardImg}
                  source={card.src}
                />

                {/* Profile Details */}
                <Animatable.View
                  animation="fadeInLeft"
                  duration={600}
                  delay={400}
                  style={{
                    position: 'absolute',
                    zIndex: 1000,
                    bottom: 120,
                    left: 20,
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 22, color: '#fff', fontWeight: '600' }}>
                      John, 23
                    </Text>
                  </View>
                  <Text style={{ color: '#fff', fontSize: 14 }}>Designer | Indian</Text>

                  {/* Location */}
                  <Animatable.View
                    animation="fadeInRight"
                    duration={600}
                    delay={600}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: wp('2%'),
                      marginTop: hp('2%'),
                    }}
                  >
                    <Flag />
                    <Text style={{ color: '#fff', fontSize: 14 }}>600 miles away,</Text>
                    <Text style={{ color: '#fff', fontWeight: '600' }}>USA</Text>
                  </Animatable.View>
                </Animatable.View>

                {/* Message Icon with Bounce */}
                <Animatable.View
                  animation="bounceIn"
                  duration={800}
                  delay={500}
                  style={{
                    position: 'absolute',
                    zIndex: 1000,
                    bottom: 120,
                    right: 20,
                  }}
                >
                  <TouchableOpacity>
                    <Message />
                  </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
            );
          }}
          onSwiped={(cardIndex) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          stackSize={3}
          showSecondCard={true}
          stackSeparation={-30}
          verticalSwipe={false}
          animateCardOpacity={true}
          animateOverlayLabelsOpacity
          cardStyle={{ backgroundColor: 'transparent' }}
          containerStyle={{ backgroundColor: 'transparent' }}
          overlayLabels={{
            left: {
              element: <Like />,
              style: {
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  marginTop: -60,
                  marginLeft: -30,
                },
              },
            },
            right: {
              element: <Dislike />,
              style: {
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginTop: -60,
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 1000,
    bottom: hp('2%'),
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  cardImg: {
    width: '100%',
    height: '85%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  swipeIconContainer: {
    backgroundColor: COLOR.secondary,
    padding: 10,
    borderRadius: 300,
  },
});

export default Home;
