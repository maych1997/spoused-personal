import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import EclipseEmptyLeft from '../../../assets/icons/eclipse-details-empty-left.svg';
import EclipseFilledLeft from '../../../assets/icons/eclipse-details-filled-left.svg';
import EclipseEmptyRight from '../../../assets/icons/eclipse-details-empty-right.svg';
import EclipseFilledRight from '../../../assets/icons/eclipse-details-filled-right.svg';
import { Chip } from 'react-native-paper';

const Personality = ({ navigation, setSteps }) => {
  const animation = useRef();
  const [selectedChips, setSelectedChips] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const traits = [
  "Analytical",
  "Thoughtful",
  "Playful",
  "Introverted",
  "Outgoing",
  "Nurturing",
  "Spontaneous",
  "Romantic",
  "Funny",
  "Optimistic",
  "Intellectual",
  "Creative",
  "Empathetic",
  "Ambitious",
  "Adventurous",
  "Active Listener",
  "Animal Lover",
  "Brunch Lover",
  "Carefree",
  "Cultural",
  "Extrovert",
  "Family Loving"
];

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    animation.current.fadeInUp();
    setSelectedChips([]);
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    animation.current.fadeInUp();
    setSelectedChips([]);
  };

  const toggleChip = option => {
    if (selectedChips.includes(option)) {
      setSelectedChips(selectedChips.filter(item => item !== option));
    } else {
      if (selectedChips.length < 5) {
        setSelectedChips([...selectedChips, option]);
      }
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
        style={{ fontSize: 24, fontWeight: 'bold', width: wp('80%') }}
      >
       Describe Your Personality
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Select 5 options that best describe you
      </Animatable.Text>

      <View style={{ gap: hp('2.5%') }}>
        <Animatable.View animation="fadeInUp" delay={200}>
          {/* Chips */}
          <Animatable.View
            ref={animation}
            animation={'fadeInUp'}
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: hp('1%'),
              marginTop: hp('3%'),
            }}
          >
            {traits.map(option => (
              <TouchableOpacity key={option} onPress={() => toggleChip(option)}>
                <Chip
                  style={{
                    padding: hp('0.5%'),
                    borderRadius: 100,
                    backgroundColor: selectedChips.includes(option)
                      ? COLOR.primary
                      : COLOR.greySecondaryShade,
                    borderWidth: 1,
                    borderColor: selectedChips.includes(option)
                      ? COLOR.primary
                      : COLOR.stepUnfinished,
                  }}
                  textStyle={{
                    color: selectedChips.includes(option)
                      ? COLOR.secondary
                      : COLOR.greyDark,
                  }}
                >
                  {option}
                </Chip>
              </TouchableOpacity>
            ))}
          </Animatable.View>
        </Animatable.View>
      </View>

      {/* Continue Button + Dots */}
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
          onPress={() => {setSteps(15);
            navigation.navigate('Bio'); // adjust route as needed
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

export default Personality;
