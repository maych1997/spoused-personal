import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useIsFocused } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Flag from '../../assets/icons/flag.svg';
import Hide from '../../assets/icons/hide.svg';
import Heart from '../../assets/icons/heart-black.svg';
import Message from '../../assets/icons/message.svg';
import MessagBlack from '../../assets/icons/message-black.svg';
import { COLOR } from '../../utils/colors';

const PRIVATE_FIELDS = new Set([
  'blurPhotos',
  'dob',
  'email',
  'phone',
  'profileCompleted',
  'uid',
  'updatedAt',
]);

const FIELD_LABELS = {
  genderPreference: 'Gender preference',
  maitalStatus: 'Marital status',
  purpose: 'Relationship goals',
};

const formatLabel = key =>
  FIELD_LABELS[key] ||
  key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]/g, ' ')
    .replace(/^./, character => character.toUpperCase());

const hasDisplayableValue = value => {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length > 0;
  }

  return true;
};

const formatPrimitive = value => {
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  return String(value);
};

const ProfileValue = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <View style={styles.valueList}>
        {value.map((item, index) =>
          item !== null && typeof item === 'object' ? (
            <ProfileValue key={index} value={item} />
          ) : (
            <Text key={index} style={styles.valueChip}>
              {formatPrimitive(item)}
            </Text>
          ),
        )}
      </View>
    );
  }

  if (value !== null && typeof value === 'object') {
    return (
      <View style={styles.nestedValues}>
        {Object.entries(value)
          .filter(([, nestedValue]) => hasDisplayableValue(nestedValue))
          .map(([key, nestedValue]) => (
            <View key={key} style={styles.nestedField}>
              <Text style={styles.nestedLabel}>{formatLabel(key)}</Text>
              <ProfileValue value={nestedValue} />
            </View>
          ))}
      </View>
    );
  }

  return <Text style={styles.valueText}>{formatPrimitive(value)}</Text>;
};

const ProfilePhoto = ({ uri, style }) => {
  const [isLoading, setIsLoading] = useState(Boolean(uri));
  const [hasError, setHasError] = useState(!uri);

  return (
    <View style={[styles.photoFrame, style]}>
      {uri && !hasError && (
        <Image
          source={{ uri }}
          style={styles.photoImage}
          resizeMode="cover"
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
      {hasError && (
        <Text style={styles.photoFallback}>Photo unavailable</Text>
      )}
      {isLoading && (
        <View pointerEvents="none" style={styles.photoLoader}>
          <ActivityIndicator color={COLOR.primary} size="large" />
          <Text style={styles.photoLoaderText}>Loading photo</Text>
        </View>
      )}
    </View>
  );
};

const ProfileDetails = ({ route }) => {
  const profile = route?.params?.profile;
  const photos = Array.isArray(profile?.photos) ? profile.photos : [];
  const fields = Object.entries(profile || {}).filter(
    ([key, value]) =>
      !PRIVATE_FIELDS.has(key) &&
      !['age', 'name', 'photos'].includes(key) &&
      hasDisplayableValue(value),
  );
  const isFocused = useIsFocused();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isFocused) {
      setKey(previousKey => previousKey + 1);
    }
  }, [isFocused]);

  if (!profile) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateText}>
          Profile details are unavailable.
        </Text>
      </View>
    );
  }

  const profileSubtitle = [profile.profession, profile.country]
    .filter(value => typeof value === 'string' && value.trim())
    .join(' · ');

  return (
    <FlatList
      key={key}
      data={fields}
      keyExtractor={([field]) => field}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={
        <View>
          <View style={styles.hero}>
            <ProfilePhoto uri={photos[0]} style={styles.heroPhoto} />
            <Animatable.View
              animation="fadeInUp"
              duration={600}
              style={styles.heroDetails}
            >
              <Text style={styles.heroName}>
                {profile.name || 'Profile'}
                {profile.age ? `, ${profile.age}` : ''}
              </Text>
              {profileSubtitle ? (
                <Text style={styles.heroSubtitle}>{profileSubtitle}</Text>
              ) : null}
              {profile.country ? (
                <View style={styles.heroLocation}>
                  <Flag />
                  <Text style={styles.heroSubtitle}>
                    {typeof profile.country === 'string'
                      ? profile.country
                      : 'Location available'}
                  </Text>
                </View>
              ) : null}
            </Animatable.View>
            <TouchableOpacity style={styles.heroMessageButton}>
              <Message />
            </TouchableOpacity>
          </View>

          {photos.length > 1 ? (
            <View style={styles.gallery}>
              <Text style={styles.sectionHeading}>Photos</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {photos.slice(1).map((photo, index) => (
                  <ProfilePhoto
                    key={`${photo}-${index}`}
                    uri={photo}
                    style={styles.galleryPhoto}
                  />
                ))}
              </ScrollView>
            </View>
          ) : null}
        </View>
      }
      renderItem={({ item: [field, value], index }) => (
        <Animatable.View
          animation="fadeInUp"
          duration={500}
          delay={Math.min(index * 80, 400)}
          style={styles.profileField}
        >
          <Text style={styles.sectionHeading}>{formatLabel(field)}</Text>
          <ProfileValue value={value} />
        </Animatable.View>
      )}
      ListEmptyComponent={
        <Text style={styles.emptyStateText}>
          No additional profile details have been added.
        </Text>
      }
      ListFooterComponent={
        <View>
          <Animatable.View
            animation="fadeInUp"
            duration={600}
            style={styles.actionButtons}
          >
            <TouchableOpacity>
              <Hide />
            </TouchableOpacity>
            <TouchableOpacity style={styles.matchButton}>
              <Heart />
              <Text style={styles.matchButtonText}>Send Match</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <MessagBlack />
            </TouchableOpacity>
          </Animatable.View>

          <View style={styles.footerActions}>
            <TouchableOpacity>
              <Text>Report</Text>
            </TouchableOpacity>
            <Text style={styles.footerSeparator}>-</Text>
            <TouchableOpacity>
              <Text>Recommend</Text>
            </TouchableOpacity>
            <Text style={styles.footerSeparator}>-</Text>
            <TouchableOpacity>
              <Text>Block</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
};

const styles = {
  listContent: {
    paddingBottom: hp('10%'),
    backgroundColor: '#fff',
  },
  hero: {
    position: 'relative',
  },
  heroPhoto: {
    width: '100%',
    height: hp('70%'),
    borderRadius: 0,
  },
  heroDetails: {
    position: 'absolute',
    zIndex: 1,
    bottom: hp('5%'),
    left: 20,
    right: 70,
  },
  heroName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: hp('0.5%'),
  },
  heroLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
    marginTop: hp('1%'),
  },
  heroMessageButton: {
    position: 'absolute',
    right: 20,
    bottom: hp('5%'),
    zIndex: 2,
  },
  gallery: {
    marginTop: hp('3%'),
    paddingLeft: wp('3%'),
  },
  galleryPhoto: {
    width: wp('65%'),
    height: hp('30%'),
    marginRight: wp('2%'),
  },
  profileField: {
    marginTop: hp('3%'),
    paddingHorizontal: wp('3%'),
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  valueText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLOR.secondary,
  },
  valueList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp('2%'),
  },
  valueChip: {
    fontSize: 14,
    paddingHorizontal: hp('1.2%'),
    paddingVertical: hp('0.8%'),
    borderRadius: 20,
    backgroundColor: COLOR.stepUnfinished,
    color: COLOR.secondary,
  },
  nestedValues: {
    gap: hp('1.5%'),
  },
  nestedField: {
    gap: hp('0.5%'),
  },
  nestedLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: COLOR.secondary,
  },
  photoFrame: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#F1F2F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  photoLoader: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'rgba(255,255,255,0.88)',
  },
  photoLoaderText: {
    color: COLOR.grey,
    fontSize: 14,
  },
  photoFallback: {
    color: COLOR.grey,
    fontSize: 14,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: hp('3%'),
  },
  emptyStateText: {
    color: COLOR.grey,
    fontSize: 16,
    textAlign: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp('2%'),
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  matchButton: {
    backgroundColor: COLOR.primary,
    padding: hp('1.5%'),
    flexDirection: 'row',
    borderRadius: 50,
    alignItems: 'center',
    gap: wp('2%'),
  },
  matchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: hp('2%'),
    alignItems: 'center',
  },
  footerSeparator: {
    fontWeight: 'bold',
  },
};

export default ProfileDetails;
