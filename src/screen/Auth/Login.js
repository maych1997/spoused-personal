import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../utils/colors';
import * as Animatable from 'react-native-animatable';
import Footer from '../../components/Footer';
import Show from '../../assets/icons/eye-solid.svg';
import Hide from '../../assets/icons/eye-slash-solid.svg';
import { loginUser } from '../../services/authService';

const Login = ({ navigation }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  // ✅ NEW STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';

  // ✅ VALIDATION FUNCTION
  const validate = () => {
    let valid = true;
    let newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      setLoading(true);
      const result = await loginUser(email, password);

      if (result.success) {
        console.log('Result::::::',result.success);
        // ✅ LOGIN SUCCESS
        navigation.push('PersonalStack');
      }
    } catch (error) {
      console.log('Firebase Login Error:', error);

      switch (error.code) {
        case 'auth/user-not-found':
          alert('No account found with this email');
          break;

        case 'auth/wrong-password':
          alert('Incorrect password');
          break;

        case 'auth/invalid-email':
          alert('Invalid email address');
          break;

        case 'auth/invalid-credential':
          alert('Email or password is incorrect');
          break;

        case 'auth/too-many-requests':
          alert('Too many attempts. Please try again later');
          break;

        default:
          alert(error.message);
      }
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
      }}
    >
      <Animatable.View
        animation="fadeInDown"
        duration={1000}
        style={{ padding: hp('1.5%') }}
      >
        <Animatable.Text
          animation="fadeInLeft"
          duration={800}
          style={{ fontSize: 24, fontWeight: 'bold' }}
        >
          Continue With Email
        </Animatable.Text>

        <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
          {/* EMAIL FIELD */}
          <Animatable.View
            animation="fadeInUp"
            delay={200}
            style={{ gap: hp('1%') }}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Email</Text>

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={{
                padding: hp('0.5%'),
                height: hp('5%'),
                borderWidth: 1,
                borderColor: errors.email ? 'red' : getBorderColor('email'),
                borderRadius: hp('1%'),
                backgroundColor: '#FAFAFA',
                fontSize: 14,
              }}
            />

            {errors.email && (
              <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text>
            )}
          </Animatable.View>

          {/* PASSWORD FIELD */}
          <Animatable.View
            animation="fadeInUp"
            delay={400}
            style={{ gap: hp('1%') }}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Password</Text>

            <View style={{ justifyContent: 'center' }}>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={isHidden}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                style={{
                  padding: hp('0.5%'),
                  height: hp('5%'),
                  borderWidth: 1,
                  borderColor: errors.password
                    ? 'red'
                    : getBorderColor('password'),
                  borderRadius: hp('1%'),
                  backgroundColor: '#FAFAFA',
                  fontSize: 14,
                  width: '100%',
                }}
              />

              <TouchableOpacity
                onPress={() => setIsHidden(!isHidden)}
                style={{ position: 'absolute', right: wp('2%') }}
              >
                {isHidden ? (
                  <Hide width={wp('4%')} height={hp('2%')} />
                ) : (
                  <Show width={wp('4%')} height={hp('2%')} />
                )}
              </TouchableOpacity>
            </View>

            {errors.password && (
              <Text style={{ color: 'red', fontSize: 12 }}>
                {errors.password}
              </Text>
            )}
          </Animatable.View>

          {/* FORGOT PASSWORD */}
          <Animatable.View
            animation="fadeInRight"
            delay={600}
            style={{ flexDirection: 'row', gap: hp('1%') }}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
              Forget your Password ?
            </Text>

            <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: COLOR.primary,
                }}
              >
                Click here to get the code
              </Text>
            </TouchableOpacity>
          </Animatable.View>

          {/* CONTINUE BUTTON */}
          <Animatable.View
            style={{ marginTop: hp('5%') }}
            animation="bounceIn"
            delay={800}
          >
            <TouchableOpacity
              onPress={() => {
                handleLogin();
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
              {loading ? (
                <ActivityIndicator></ActivityIndicator>
              ) : (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: COLOR.secondary,
                  }}
                >
                  Continue
                </Text>
              )}
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </Animatable.View>

      {/* FOOTER */}
      <Footer />
    </View>
  );
};

export default Login;
