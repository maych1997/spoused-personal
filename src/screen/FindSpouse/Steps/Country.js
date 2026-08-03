import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import Unselect from '../../../assets/icons/eclipse-empty-icon.svg';
import Select from '../../../assets/icons/selected-tick-eclipse.svg';
import Tick from '../../../assets/icons/tick.svg';
import Search from '../../../components/Search';
import { updateUserProfile } from '../../../services/saveUserService';

const Country = ({ navigation, setSpouseSteps }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [selected, setSelected] = useState(0);
  const countries = [
    { id: 1, name: 'Afghanistan' },
    { id: 2, name: 'Albania' },
    { id: 3, name: 'Algeria' },
    { id: 4, name: 'Andorra' },
    { id: 5, name: 'Angola' },
    { id: 6, name: 'Antigua and Barbuda' },
    { id: 7, name: 'Argentina' },
    { id: 8, name: 'Armenia' },
    { id: 9, name: 'Australia' },
    { id: 10, name: 'Austria' },
    { id: 11, name: 'Azerbaijan' },
    { id: 12, name: 'Bahamas' },
    { id: 13, name: 'Bahrain' },
    { id: 14, name: 'Bangladesh' },
    { id: 15, name: 'Barbados' },
    { id: 16, name: 'Belarus' },
    { id: 17, name: 'Belgium' },
    { id: 18, name: 'Belize' },
    { id: 19, name: 'Benin' },
    { id: 20, name: 'Bhutan' },
    { id: 21, name: 'Bolivia' },
    { id: 22, name: 'Bosnia and Herzegovina' },
    { id: 23, name: 'Botswana' },
    { id: 24, name: 'Brazil' },
    { id: 25, name: 'Brunei' },
    { id: 26, name: 'Bulgaria' },
    { id: 27, name: 'Burkina Faso' },
    { id: 28, name: 'Burundi' },
    { id: 29, name: 'Cabo Verde' },
    { id: 30, name: 'Cambodia' },
    { id: 31, name: 'Cameroon' },
    { id: 32, name: 'Canada' },
    { id: 33, name: 'Central African Republic' },
    { id: 34, name: 'Chad' },
    { id: 35, name: 'Chile' },
    { id: 36, name: 'China' },
    { id: 37, name: 'Colombia' },
    { id: 38, name: 'Comoros' },
    { id: 39, name: 'Congo (Congo-Brazzaville)' },
    { id: 40, name: 'Congo (Democratic Republic)' },
    { id: 41, name: 'Costa Rica' },
    { id: 42, name: 'Croatia' },
    { id: 43, name: 'Cuba' },
    { id: 44, name: 'Cyprus' },
    { id: 45, name: 'Czechia (Czech Republic)' },
    { id: 46, name: 'Denmark' },
    { id: 47, name: 'Djibouti' },
    { id: 48, name: 'Dominica' },
    { id: 49, name: 'Dominican Republic' },
    { id: 50, name: 'Ecuador' },
    { id: 51, name: 'Egypt' },
    { id: 52, name: 'El Salvador' },
    { id: 53, name: 'Equatorial Guinea' },
    { id: 54, name: 'Eritrea' },
    { id: 55, name: 'Estonia' },
    { id: 56, name: 'Eswatini (Swaziland)' },
    { id: 57, name: 'Ethiopia' },
    { id: 58, name: 'Fiji' },
    { id: 59, name: 'Finland' },
    { id: 60, name: 'France' },
    { id: 61, name: 'Gabon' },
    { id: 62, name: 'Gambia' },
    { id: 63, name: 'Georgia' },
    { id: 64, name: 'Germany' },
    { id: 65, name: 'Ghana' },
    { id: 66, name: 'Greece' },
    { id: 67, name: 'Grenada' },
    { id: 68, name: 'Guatemala' },
    { id: 69, name: 'Guinea' },
    { id: 70, name: 'Guinea-Bissau' },
    { id: 71, name: 'Guyana' },
    { id: 72, name: 'Haiti' },
    { id: 73, name: 'Honduras' },
    { id: 74, name: 'Hungary' },
    { id: 75, name: 'Iceland' },
    { id: 76, name: 'India' },
    { id: 77, name: 'Indonesia' },
    { id: 78, name: 'Iran' },
    { id: 79, name: 'Iraq' },
    { id: 80, name: 'Ireland' },
    { id: 81, name: 'Israel' },
    { id: 82, name: 'Italy' },
    { id: 83, name: 'Jamaica' },
    { id: 84, name: 'Japan' },
    { id: 85, name: 'Jordan' },
    { id: 86, name: 'Kazakhstan' },
    { id: 87, name: 'Kenya' },
    { id: 88, name: 'Kiribati' },
    { id: 89, name: 'Kuwait' },
    { id: 90, name: 'Kyrgyzstan' },
    { id: 91, name: 'Laos' },
    { id: 92, name: 'Latvia' },
    { id: 93, name: 'Lebanon' },
    { id: 94, name: 'Lesotho' },
    { id: 95, name: 'Liberia' },
    { id: 96, name: 'Libya' },
    { id: 97, name: 'Liechtenstein' },
    { id: 98, name: 'Lithuania' },
    { id: 99, name: 'Luxembourg' },
    { id: 100, name: 'Madagascar' },
    { id: 101, name: 'Malawi' },
    { id: 102, name: 'Malaysia' },
    { id: 103, name: 'Maldives' },
    { id: 104, name: 'Mali' },
    { id: 105, name: 'Malta' },
    { id: 106, name: 'Marshall Islands' },
    { id: 107, name: 'Mauritania' },
    { id: 108, name: 'Mauritius' },
    { id: 109, name: 'Mexico' },
    { id: 110, name: 'Micronesia' },
    { id: 111, name: 'Moldova' },
    { id: 112, name: 'Monaco' },
    { id: 113, name: 'Mongolia' },
    { id: 114, name: 'Montenegro' },
    { id: 115, name: 'Morocco' },
    { id: 116, name: 'Mozambique' },
    { id: 117, name: 'Myanmar (Burma)' },
    { id: 118, name: 'Namibia' },
    { id: 119, name: 'Nauru' },
    { id: 120, name: 'Nepal' },
    { id: 121, name: 'Netherlands' },
    { id: 122, name: 'New Zealand' },
    { id: 123, name: 'Nicaragua' },
    { id: 124, name: 'Niger' },
    { id: 125, name: 'Nigeria' },
    { id: 126, name: 'North Korea' },
    { id: 127, name: 'North Macedonia' },
    { id: 128, name: 'Norway' },
    { id: 129, name: 'Oman' },
    { id: 130, name: 'Pakistan' },
    { id: 131, name: 'Palau' },
    { id: 132, name: 'Palestine State' },
    { id: 133, name: 'Panama' },
    { id: 134, name: 'Papua New Guinea' },
    { id: 135, name: 'Paraguay' },
    { id: 136, name: 'Peru' },
    { id: 137, name: 'Philippines' },
    { id: 138, name: 'Poland' },
    { id: 139, name: 'Portugal' },
    { id: 140, name: 'Qatar' },
    { id: 141, name: 'Romania' },
    { id: 142, name: 'Russia' },
    { id: 143, name: 'Rwanda' },
    { id: 144, name: 'Saint Kitts and Nevis' },
    { id: 145, name: 'Saint Lucia' },
    { id: 146, name: 'Saint Vincent and the Grenadines' },
    { id: 147, name: 'Samoa' },
    { id: 148, name: 'San Marino' },
    { id: 149, name: 'Sao Tome and Principe' },
    { id: 150, name: 'Saudi Arabia' },
    { id: 151, name: 'Senegal' },
    { id: 152, name: 'Serbia' },
    { id: 153, name: 'Seychelles' },
    { id: 154, name: 'Sierra Leone' },
    { id: 155, name: 'Singapore' },
    { id: 156, name: 'Slovakia' },
    { id: 157, name: 'Slovenia' },
    { id: 158, name: 'Solomon Islands' },
    { id: 159, name: 'Somalia' },
    { id: 160, name: 'South Africa' },
    { id: 161, name: 'South Korea' },
    { id: 162, name: 'South Sudan' },
    { id: 163, name: 'Spain' },
    { id: 164, name: 'Sri Lanka' },
    { id: 165, name: 'Sudan' },
    { id: 166, name: 'Suriname' },
    { id: 167, name: 'Sweden' },
    { id: 168, name: 'Switzerland' },
    { id: 169, name: 'Syria' },
    { id: 170, name: 'Taiwan' },
    { id: 171, name: 'Tajikistan' },
    { id: 172, name: 'Tanzania' },
    { id: 173, name: 'Thailand' },
    { id: 174, name: 'Timor-Leste' },
    { id: 175, name: 'Togo' },
    { id: 176, name: 'Tonga' },
    { id: 177, name: 'Trinidad and Tobago' },
    { id: 178, name: 'Tunisia' },
    { id: 179, name: 'Turkey' },
    { id: 180, name: 'Turkmenistan' },
    { id: 181, name: 'Tuvalu' },
    { id: 182, name: 'Uganda' },
    { id: 183, name: 'Ukraine' },
    { id: 184, name: 'United Arab Emirates' },
    { id: 185, name: 'United Kingdom' },
    { id: 186, name: 'United States of America' },
    { id: 187, name: 'Uruguay' },
    { id: 188, name: 'Uzbekistan' },
    { id: 189, name: 'Vanuatu' },
    { id: 190, name: 'Vatican City' },
    { id: 191, name: 'Venezuela' },
    { id: 192, name: 'Vietnam' },
    { id: 193, name: 'Yemen' },
    { id: 194, name: 'Zambia' },
    { id: 195, name: 'Zimbabwe' },
  ];

  const getBorderColor = fieldName =>
    focusedField === fieldName ? COLOR.primary : '#0000000D';
  const handleNext = () => {
    if (!selected) {
      Alert.alert('Please select your country');
      return;
    }

    // optional: save to backend here
    updateUserProfile({ country: selected });

    setSpouseSteps(4);
    navigation.push('Height');
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
        style={{ fontSize: 24, fontWeight: 'bold' }}
      >
        Where Are You From?
      </Animatable.Text>
      <Animatable.Text style={{ fontSize: 14, color: COLOR.grey }}>
        Please select your home country
      </Animatable.Text>
      <Search></Search>
      <View style={{ paddingTop: hp('2.5%'), gap: hp('2.5%') }}>
        {/* Email Field */}
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={{ gap: hp('1%') }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={countries}
            contentContainerStyle={{ gap: hp('1%'), paddingBottom: hp('18%') }}
            renderItem={country => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(country?.item?.id);
                  }}
                  style={{
                    backgroundColor: COLOR.greyShade,
                    padding: hp('2%'),
                    borderRadius: hp('0.8%'),
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: 14, color: COLOR.secondary }}>
                    {country?.item?.name}
                  </Text>
                  {country?.item?.id == selected ? (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <View style={{ position: 'absolute', zIndex: 1 }}>
                        <Tick></Tick>
                      </View>
                      <Select></Select>
                    </View>
                  ) : (
                    <Unselect></Unselect>
                  )}
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </Animatable.View>
      </View>
      {/* Continue Button */}
      <Animatable.View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          alignSelf: 'center',
        }}
        animation="bounceIn"
        delay={800}
      >
        <TouchableOpacity
          onPress={() => {
            handleNext()
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

export default Country;
