import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Message from '../../assets/icons/message.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Flag from '../../assets/icons/flag.svg';
import { COLOR } from '../../utils/colors';
import Hide from '../../assets/icons/hide.svg';
import Heart from '../../assets/icons/heart-black.svg';
import MessagBlack from '../../assets/icons/message-black.svg';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';
import Navigation from '../../assets/icons/navigation.svg';

const ProfileDetails = () => {
  const details = [
    { heading: 'About Me', details: ['Secondary School', 'Aries', 'Single'] },
    {
      heading: 'Biography',
      details:
        'Qui id non deleniti ipsa rem praesentium quaerat. Minus sit id vitae in et maiores quisquam consectetur. Quia aliquid quibusdam impedit laudantium. Sint porro dolorum ea qui enim id quia praesentium dolor. Quo voluptatibus corrupti voluptatem aut at molestiae facilis temporibus dignissimos. Dolores ad libero fugit voluptates.',
    },
    {
      heading: 'Interests',
      details: ['Basket Ball', 'Surfing', 'Baking', 'Junk Food', 'Meat Lover'],
    },
    {
      heading: '',
      details: [
        require('../../assets/placeHolder/placeholder.jpg'),
        require('../../assets/placeHolder/placeholder.jpg'),
        require('../../assets/placeHolder/placeholder.jpg'),
        require('../../assets/placeHolder/placeholder.jpg'),
      ],
    },
    {
      heading: 'Location',
      details: ['23854 Schiller Lakes', '3.2 km away', 'Pakistan'],
    },
    { heading: 'Height & Age', details: ['5.6`', '22 years old'] },
    {
      heading: 'Profession & Education',
      details: ['UI / UX Designer`', 'Secondary School'],
    },
  ];

  const isFocused = useIsFocused();
  const [key, setKey] = useState(0);

  // 🔄 Restart animations on focus
  useEffect(() => {
    if (isFocused) {
      setKey(prev => prev + 1);
    }
  }, [isFocused]);

  return (
    <FlatList
      key={key}
      data={details}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{
        paddingBottom: hp('10%'),
        backgroundColor: '#fff',
      }}
      // 🔹 HEADER
      ListHeaderComponent={
        <View style={{ position: 'relative' }}>
          {/* Profile Image with fadeIn */}
          <Animatable.Image
            animation="fadeIn"
            duration={800}
            style={{ width: '100%', height: hp('70%') }}
            source={require('../../assets/placeHolder/placeholder.jpg')}
          />

          {/* Name + Info */}
          <Animatable.View
            animation="fadeInUp"
            duration={600}
            delay={300}
            style={{
              position: 'absolute',
              zIndex: 1000,
              top: hp('57%'),
              left: 20,
            }}
          >
            <Text style={{ fontSize: 22, color: '#fff', fontWeight: '600' }}>
              John, 23
            </Text>
            <Text style={{ color: '#fff', fontSize: 14 }}>
              Designer | Indian
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: wp('2%'),
                marginTop: hp('2%'),
              }}
            >
              <Flag />
              <Text style={{ color: '#fff', fontSize: 14 }}>
                600 miles away,
              </Text>
              <Text style={{ color: '#fff', fontWeight: '600' }}>USA</Text>
            </View>
          </Animatable.View>

          {/* Message Icon */}
          <Animatable.View
            animation="bounceIn"
            duration={800}
            delay={500}
            style={{ position: 'absolute', top: hp('61%'), right: 20 }}
          >
            <TouchableOpacity>
              <Message />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      }
      // 🔹 EACH DETAIL ITEM
      renderItem={({ item, index }) => (
        <Animatable.View
          animation="fadeInUp"
          duration={600}
          delay={index * 150}
          style={{
            marginTop: hp('3%'),
            paddingLeft: wp('2%'),
            paddingRight: wp('2%'),
          }}
        >
          {item?.heading ? (
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: hp('1%'),
              }}
            >
              {item.heading}
            </Text>
          ) : null}

          {Array.isArray(item.details) ? (
            <>
              {/* Horizontal Image Scroll */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {item.details.map((detail, idx) =>
                  typeof detail !== 'string' ? (
                    <Image
                      key={idx}
                      source={detail}
                      style={{
                        width: wp('70%'),
                        height: hp('35%'),
                        borderRadius: 10,
                        margin: wp('1%'),
                      }}
                    />
                  ) : null,
                )}
              </ScrollView>

              {/* Tags / Info */}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {item.details.map((detail, idx) =>
                  typeof detail === 'string' ? (
                    item.heading != 'Location' ? (
                      <Text
                        key={idx}
                        style={{
                          fontSize: 14,
                          padding: hp('1%'),
                          borderRadius: 20,
                          marginRight: wp('2%'),
                          marginTop: hp('1%'),
                          backgroundColor: COLOR.stepUnfinished,
                          textAlign: 'center',
                        }}
                      >
                        {detail}
                      </Text>
                    ) : (
                      <></>
                    )
                  ) : null,
                )}
              </View>
              <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                {item.details.map((detail, idx) =>
                  typeof detail === 'string' ? (
                    item.heading == 'Location' && idx == 0 ? (
                      <Text
                        key={idx}
                        style={{
                          fontSize: 14,
                          marginRight: wp('2%'),
                          marginTop: hp('1%'),
                          textAlign: 'center',
                          color: '#000',
                          opacity: 0.5,
                        }}
                      >
                        {detail}
                      </Text>
                    ) : (
                      <></>
                    )
                  ) : null,
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: hp('0.5%'),
                }}
              >
                {item.details.map((detail, idx) =>
                  typeof detail === 'string' ? (
                    item.heading == 'Location' && idx != 0 ? (
                      <View
                        style={{
                          backgroundColor: COLOR.stepUnfinished,
                          padding: hp('1%'),
                          borderRadius: 20,
                          marginRight: wp('2%'),
                          marginTop: hp('1%'),
                          display: 'flex',
                          flexDirection: 'row',
                          gap: wp('2%'),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {idx == 1 ? <Navigation></Navigation> : <></>}
                        <Text
                          key={idx}
                          style={{
                            fontSize: 14,
                            textAlign: 'center',
                          }}
                        >
                          {detail}
                        </Text>
                      </View>
                    ) : (
                      <></>
                    )
                  ) : null,
                )}
              </View>
            </>
          ) : (
            <Text
              style={{
                fontSize: 16,
                marginTop: hp('0.5%'),
                textAlign: 'justify',
              }}
            >
              {item.details}
            </Text>
          )}
        </Animatable.View>
      )}
      // 🔹 FOOTER
      ListFooterComponent={
        <>
          {/* Action Buttons */}
          <Animatable.View
            animation="fadeInUp"
            duration={600}
            delay={details.length * 150}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: hp('2%'),
              marginTop: hp('2%'),
              alignItems: 'center',
            }}
          >
            <TouchableOpacity>
              <Hide />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLOR.primary,
                padding: hp('1.5%'),
                flexDirection: 'row',
                borderRadius: 50,
                alignItems: 'center',
                gap: wp('2%'),
              }}
            >
              <Heart />
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Send Match
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <MessagBlack />
            </TouchableOpacity>
          </Animatable.View>

          {/* Footer Actions */}
          <Animatable.View
            animation="fadeInUp"
            duration={600}
            delay={details.length * 200}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: hp('2%'),
              alignItems: 'center',
            }}
          >
            <TouchableOpacity>
              <Text>Report</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold' }}>-</Text>
            <TouchableOpacity>
              <Text>Recommend</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold' }}>-</Text>
            <TouchableOpacity>
              <Text>Block</Text>
            </TouchableOpacity>
          </Animatable.View>
        </>
      }
    />
  );
};

export default ProfileDetails;
