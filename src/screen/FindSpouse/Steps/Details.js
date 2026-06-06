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

const Details = ({ navigation, setSpouseSteps }) => {
  const animation = useRef();
  const [selectedChips, setSelectedChips] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = [
    {
      id: 1,
      title: 'Food & Drink',
      text: 'What Kind Of Food Do You Like?',
      options: [
        'Baking',
        'Bubble Tea',
        'Cooking',
        'Caking Decoration',
        'Coffee',
        'Pizza',
        'Junk Food',
        'Sushi',
        'Vegan',
        'Vegetarian',
        'Meat Lover',
        'Fish',
        'Chips',
        'Healthy Eating',
        'Eating out',
        'Chocolate',
      ],
    },
    {
      id: 2,
      title: 'Sports',
      text: 'Which Of These Sports Interest You?',
      options: [
        'Basketball',
        'Soccer',
        'Tennis',
        'Running',
        'Swimming',
        'Yoga',
        'Cycling',
        'Golf',
        'Cricket',
        'Snowboarding',
        'Surfing',
        'Volleyball',
      ],
    },
    {
      id: 3,
      title: 'Entertainment',
      text: 'Which Entertainment Options Interest You?',
      options: [
        'Netflix & Streaming',
        'Gaming',
        'Vlogging & Content Creation',
        'Movies & TV Shows',
        'Podcasts',
      ],
    },
    {
      id: 4,
      title: 'Hobbies',
      text: 'Which Hobbies Interest You?',
      options: [
        'Book Reading',
        'Writing & Blogging',
        'Music (Listening, Playing Instruments)',
        'Painting & Drawing',
        'Photography',
      ],
    },
  ];

  const currentQuestion = questions[currentIndex];

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
                paddingHorizontal: hp('1.5%'),
                paddingTop: hp('3%'),
      }}
    >
      {/* Title */}
      <Animatable.Text
        animation="fadeInLeft"
        duration={800}
        style={{ fontSize: 24, fontWeight: 'bold', width: wp('80%') }}
      >
        {currentQuestion.text}
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select up to 5 options
      </Animatable.Text>

      <View style={{ gap: hp('2.5%') }}>
        <Animatable.View animation="fadeInUp" delay={200}>
          <View>
            {/* Header Navigation */}
            <View
              style={{
                height: hp('6%'),
                backgroundColor: COLOR.greySecondaryShade,
                marginTop: hp('7%'),
                borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: hp('0.5%'),
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={goPrevious}
                disabled={currentIndex === 0}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}
              >
                {currentIndex > 0 ? (
                  <EclipseFilledLeft />
                ) : (
                  <EclipseEmptyLeft />
                )}
              </TouchableOpacity>

              <Animatable.Text
                animation="fadeInLeft"
                duration={800}
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {currentQuestion.title}
              </Animatable.Text>

              <TouchableOpacity
                onPress={goNext}
                disabled={currentIndex === questions.length - 1}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}
              >
                {currentIndex < questions.length - 1 ? (
                  <EclipseFilledRight />
                ) : (
                  <EclipseEmptyRight />
                )}
              </TouchableOpacity>
            </View>

            {/* Selected Counter */}
            <View
              style={{ display: 'flex', flexDirection: 'row', gap: wp('1%') }}
            >
              <Animatable.Text
                style={{ fontSize: 14, color: COLOR.grey, marginTop: hp('2%') }}
              >
                Selected
              </Animatable.Text>
              <Animatable.Text
                style={{
                  fontSize: 14,
                  color: COLOR.secondary,
                  marginTop: hp('2%'),
                  fontWeight: '600',
                }}
              >
                {selectedChips.length} of 5
              </Animatable.Text>
            </View>
          </View>

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
            {currentQuestion.options.map(option => (
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
          position: 'absolute',
          width: '100%',
          bottom: 0,
          alignSelf: 'center',
        }}
        animation="bounceIn"
        delay={800}
      >
        {/* Dots Indicator */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: hp('1.5%'),
          }}
        >
          {questions.map((_, index) => (
            <View
              key={index}
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                marginHorizontal: 5,
                backgroundColor:
                  index === currentIndex
                    ? COLOR.primary
                    : COLOR.stepUnfinished,
              }}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => {setSpouseSteps(14);
            navigation.push('Personality'); // adjust route as needed
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

export default Details;
