import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
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
import { AuthContext } from '../../provider/AuthContext';
import { useGetUsersQuery } from '../../services/usersApi';

const ProfileCard = ({ profile }) => {
  const imageUri = profile?.photos?.[0];
  const [isImageLoading, setIsImageLoading] = useState(Boolean(imageUri));
  const [imageFailed, setImageFailed] = useState(!imageUri);

  return (
    <Animatable.View
      animation="fadeInUp"
      duration={600}
      easing="ease-out-cubic"
      style={styles.profileCard}
    >
      <View style={styles.photoContainer}>
        <View style={styles.photoPlaceholder}>
          {imageFailed && (
            <Text style={styles.photoUnavailable}>Photo unavailable</Text>
          )}
        </View>

        {imageUri && !imageFailed && (
          <Animatable.Image
            animation="zoomIn"
            duration={800}
            style={styles.cardImg}
            source={{ uri: imageUri }}
            onLoadStart={() => setIsImageLoading(true)}
            onLoadEnd={() => setIsImageLoading(false)}
            onError={() => {
              setIsImageLoading(false);
              setImageFailed(true);
            }}
          />
        )}

        {isImageLoading && (
          <View pointerEvents="none" style={styles.photoLoadingOverlay}>
            <ActivityIndicator color={COLOR.primary} size="large" />
          </View>
        )}
      </View>

      <Animatable.View
        animation="fadeInLeft"
        duration={600}
        delay={400}
        style={styles.profileDetails}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 22, color: '#fff', fontWeight: '600' }}>
            {profile?.name}, {profile?.age}
          </Text>
        </View>
        <Text style={{ color: '#fff', fontSize: 14 }}>Designer | Indian</Text>

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

      <Animatable.View
        animation="bounceIn"
        duration={800}
        delay={500}
        style={styles.messageButton}
      >
        <TouchableOpacity>
          <Message />
        </TouchableOpacity>
      </Animatable.View>
    </Animatable.View>
  );
};

const Home = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const {
    data: profiles = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetUsersQuery(user?.uid, { skip: !user?.uid });
  const [hasSwipedAll, setHasSwipedAll] = useState(false);

  const isFocused = useIsFocused();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isFocused) {
      setKey(prev => prev + 1);
      setHasSwipedAll(false);
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: COLOR.other }}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator color={COLOR.primary} />
        ) : isError ? (
          <View style={{ alignItems: 'center', gap: 10 }}>
            <Text style={{ color: COLOR.grey, fontSize: 16 }}>
              {error?.error || 'Unable to load profiles.'}
            </Text>
            <TouchableOpacity onPress={refetch}>
              <Text style={{ color: COLOR.primary }}>Try again</Text>
            </TouchableOpacity>
          </View>
        ) : hasSwipedAll || profiles.length === 0 ? (
          <Text style={{ color: COLOR.grey, fontSize: 16 }}>
            {hasSwipedAll
              ? "You've seen all profiles."
              : 'No profiles available right now.'}
          </Text>
        ) : (
          <Swiper
            key={key}
            stackScale={3}
            cards={profiles}
            onTapCard={cardIndex => {
              const profile = profiles[cardIndex];
              if (profile) {
                navigation.push('ProfileDetails', { profile });
              }
            }}
            renderCard={profile => (
              <ProfileCard
                key={`${key}-${profile?.uid}`}
                profile={profile}
              />
            )}
            onSwiped={cardIndex => {
              console.log(cardIndex);
            }}
            onSwipedAll={() => {
              setHasSwipedAll(true);
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
                element: <Dislike width={140} height={140} />,
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
                element: <Like width={140} height={140} />,
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
        )}
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
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  cardImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileCard: {
    width: 'auto',
    height: '90%',
    overflow: 'hidden',
  },
  photoContainer: {
    width: '100%',
    height: '85%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F1F2F4',
  },
  photoPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F2F4',
  },
  photoLoadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  },
  photoLoadingText: {
    color: COLOR.grey,
    fontSize: 14,
    fontWeight: '500',
  },
  photoUnavailable: {
    color: COLOR.grey,
    fontSize: 14,
  },
  profileDetails: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 120,
    left: 20,
  },
  messageButton: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 120,
    right: 20,
  },
  swipeIconContainer: {
    backgroundColor: COLOR.secondary,
    padding: 10,
    borderRadius: 300,
  },
});

export default Home;
