import {
  View,
  Platform,
  Touchable,
  TouchableOpacity,
  Pressable,
  Animated,
} from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/BottomTab/Home';
import Likes from '../screen/BottomTab/Likes';
import Chat from '../screen/BottomTab/Chat';
import Profile from '../screen/BottomTab/Profile';
import { COLOR } from '../utils/colors';
import CardSelected from '../assets/icons/card-selected.svg';
import LikesSelected from '../assets/icons/likes-selected.svg';
import ChatSelected from '../assets/icons/chat-selected.svg';
import ProfileSelected from '../assets/icons/profile-selected.svg';
import Card from '../assets/icons/card.svg';
import Like from '../assets/icons/likes.svg';
import Chats from '../assets/icons/chat.svg';
import Profiles from '../assets/icons/profile.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStack from '../screen/BottomTab/SubStack/HomeStack';
import LikeStack from '../screen/BottomTab/SubStack/LikeStack';


function MyTabBar({ state, descriptors, navigation }) {
  const tabWidth = wp(`${100 / state.routes.length}%`);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: state.index * tabWidth,
      useNativeDriver: true,
    }).start();
  }, [state.index]);

  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        bottom:0,
        backgroundColor: COLOR.primary,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
      }}
    >
      {/* Sliding indicator */}
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 3,
          width: tabWidth * 0.5,
          backgroundColor: COLOR.secondary,
          borderRadius: 2,
          transform: [
            {
              translateX: Animated.add(
                translateX,
                new Animated.Value(tabWidth * 0.25), // center under icon
              ),
            },
          ],
        }}
      />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={{
              flex: 1,
              paddingVertical: hp('2.5%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {index == 0 ? (
              isFocused ? (
                <CardSelected />
              ) : (
                <Card />
              )
            ) : index == 1 ? (
              isFocused ? (
                <LikesSelected />
              ) : (
                <Like />
              )
            ) : index == 2 ? (
              isFocused ? (
                <ChatSelected />
              ) : (
                <Chats />
              )
            ) : isFocused ? (
              <ProfileSelected />
            ) : (
              <Profiles />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
function BottomTab() {
  const tabs = [
    { name: 'HomeStack', component: HomeStack },
    { name: 'LikeStack', component: LikeStack },
    { name: 'Chat', component: Chat },
    { name: 'Profile', component: Profile },
  ];
  return (
    <View style={{ flex: 1,paddingBottom:hp('2%'),backgroundColor:'#fff' }}>
      <Tab.Navigator
        screenOptions={{ headerShown: false}}
        tabBar={props => <MyTabBar {...props} />}
      >
        {tabs?.map(tab => {
          return (
            <Tab.Screen name={tab.name} component={tab.component}></Tab.Screen>
          );
        })}
      </Tab.Navigator>
    </View>
  );
}

export default BottomTab;
