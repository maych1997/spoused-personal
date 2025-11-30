import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const Footer = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Animatable.Text
        style={{ fontSize: 12, color: '#00000066' }}
        animation="fadeInUp"
        delay={1000}
      >
        By Continuing you agree to our
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUp"
        delay={1200}
        style={{ flexDirection: 'row', gap: wp('2%') }}
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
  );
};

export default Footer;
