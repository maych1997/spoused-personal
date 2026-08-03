import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';

// 🔥 IMPORT YOUR SERVICE
import { updateUserProfile } from '../../../services/saveUserService';

const Name = ({ navigation, setSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  const handleNext = async () => {
    try {
      if (!name.trim()) return;

      setLoading(true);

      // 🔥 SAVE TO FIREBASE
      await updateUserProfile({
        name: name.trim(),
      });

      setSteps(1);
      navigation.push('Photos');
    } catch (error) {
      console.log('Error saving name:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLOR.other,
        paddingTop: hp('3%'),
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
        {/* TITLE */}
        <View>
          <Animatable.Text
            animation="fadeInLeft"
            duration={800}
            style={{ fontSize: 24, fontWeight: 'bold' }}
          >
            What Is Your Name?
          </Animatable.Text>

          <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
            Please enter your full name as it appears on your national ID.
          </Animatable.Text>

          {/* INPUT */}
          <View style={{ paddingTop: hp('2.5%') }}>
            <Animatable.View animation="fadeInUp" delay={200}>
              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={{
                  padding: hp('0.5%'),
                  height: hp('5%'),
                  borderWidth: 1,
                  borderColor: getBorderColor('name'),
                  borderRadius: hp('1%'),
                  backgroundColor: '#FAFAFA',
                  fontSize: 14,
                }}
              />
            </Animatable.View>
          </View>
        </View>

        {/* BUTTON */}
        <Animatable.View animation="bounceIn" delay={800}>
          <TouchableOpacity
            onPress={handleNext}
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: loading ? '#999' : COLOR.primary,
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
              {loading ? 'Saving...' : 'Next'}
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default Name;
