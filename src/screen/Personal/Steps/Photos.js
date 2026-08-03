import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Alert,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import ToggleSwitch from 'toggle-switch-react-native';
import { FlatGrid } from 'react-native-super-grid';
import Delete from '../../../assets/icons/delete.svg';
import AddIcon from '../../../assets/icons/add-icon.svg';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  updateUserProfile,
  getUserProfile,
} from '../../../services/saveUserService';
import { getUid } from '../../../services/saveUserService';

const Photos = ({ navigation, setSteps }) => {
  const [photos, setPhotos] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [blurPhotos, setBlurPhotos] = useState(false);

  const data = [...photos, 'extra'];
  const CLOUD_NAME = 'dzyoneiuh';
  const UPLOAD_PRESET = 'upload_preset_name';
  const pickImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
        quality: 0.8,
      });

      if (!result.assets?.length) {
        return;
      }

      setIsUploading(true);

      const image = result.assets[0];

      const formData = new FormData();

      formData.append('file', {
        uri: image.uri,
        type: image.type || 'image/jpeg',
        name: image.fileName || `photo-${Date.now()}.jpg`,
      });

      formData.append('upload_preset', UPLOAD_PRESET);
      formData.append('folder', 'profile_photos/' + getUid());

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        },
      );

      const data = await response.json();

      if (!data.secure_url) {
        throw new Error(data.error?.message || 'Cloudinary upload failed');
      }

      const imageUrl = data.secure_url;

      const updatedPhotos = [...photos, imageUrl];

      setPhotos(updatedPhotos);

      await updateUserProfile({
        photos: updatedPhotos,
      });

      setIsUploading(false);
    } catch (error) {
      setIsUploading(false);

      console.log('Cloudinary Upload Error:', error);

      Alert.alert('Error', error.message || 'Failed to upload image');
    }
  };

  const deletePhoto = async index => {
    try {
      const updatedPhotos = photos.filter((_, i) => i !== index);

      setPhotos(updatedPhotos);

      await updateUserProfile({
        photos: updatedPhotos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    if (photos.length < 2) {
      Alert.alert('Photos Required', 'Please upload at least 2 photos');
      return;
    }

    setSteps(2);
    navigation.push('Birthday');
  };
  const loadPhotos = async () => {
    try {
      const res = await getUserProfile();

      if (res.success && res.data) {
        setPhotos(res.data.photos || []);
        setBlurPhotos(res.data.blurPhotos || false);
      }
    } catch (error) {
      console.log('Load Photos Error:', error);
    }
  };
  useEffect(() => {
    loadPhotos();
  }, []);
  const handleBlurToggle = async value => {
    setBlurPhotos(value);

    try {
      await updateUserProfile({
        blurPhotos: value,
      });
    } catch (error) {
      console.log('Blur update error:', error);
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
        <View>
          <Animatable.Text
            animation="fadeInLeft"
            duration={800}
            style={{
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            Add Your Photos
          </Animatable.Text>

          <Animatable.Text
            style={{
              fontSize: 14,
              color: COLOR.grey,
            }}
          >
            Please add at least 2 clear images of yourself
          </Animatable.Text>

          <View
            style={{
              paddingTop: hp('2.5%'),
              gap: hp('2.5%'),
            }}
          >
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={{
                gap: hp('1%'),
                backgroundColor: '#F5F5F5',
                padding: hp('2%'),
                borderRadius: hp('1.2%'),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ gap: hp('0.8%') }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: COLOR.secondary,
                  }}
                >
                  Blur Photos
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    color: COLOR.secondary,
                  }}
                >
                  Blur my photos to others
                </Text>
              </View>

              <ToggleSwitch
                isOn={blurPhotos}
                onColor={COLOR.primary}
                offColor={COLOR.grey}
                size="medium"
                onToggle={handleBlurToggle}
              />
            </Animatable.View>
          </View>
        </View>

        <FlatGrid
          itemDimension={120}
          data={data}
          spacing={10}
          renderItem={({ item, index }) => {
            if (item === 'extra') {
              return (
                <TouchableOpacity
                  disabled={isUploading}
                  onPress={pickImage}
                  style={{
                    height: hp('20%'),
                    borderRadius: hp('1.2%'),
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLOR.grey,
                  }}
                >
                  {isUploading ? (
                    <ActivityIndicator
                      color={COLOR.primary}
                    ></ActivityIndicator>
                  ) : (
                    <>
                      <Text
                        style={{
                          fontSize: hp('4%'),
                          fontWeight: '500',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                      >
                        +
                      </Text>

                      <AddIcon />
                    </>
                  )}
                </TouchableOpacity>
              );
            }

            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={{ uri: item }}
                  style={{
                    height: hp('20%'),
                    width: '100%',
                    borderRadius: hp('1.2%'),
                  }}
                />

                <TouchableOpacity
                  onPress={() => deletePhoto(index)}
                  style={{
                    position: 'absolute',
                  }}
                >
                  <Delete />
                </TouchableOpacity>
              </View>
            );
          }}
        />

        <Animatable.View
          style={{
            marginTop: hp('1%'),
          }}
          animation="bounceIn"
          delay={800}
        >
          <TouchableOpacity
            onPress={handleNext}
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
      </Animatable.View>
    </View>
  );
};

export default Photos;
