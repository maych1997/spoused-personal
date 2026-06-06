import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import SplashStack from './src/stack/SplashStack';
import Authentication from './src/screen/Auth/Authentication';
import { COLOR } from './src/utils/colors';
import Height from './src/screen/FindSpouse/Steps/Height';
import Details from './src/screen/FindSpouse/Steps/Details';
import { useState } from 'react';
import Personality from './src/screen/FindSpouse/Steps/Personality';
import Bio from './src/screen/FindSpouse/Steps/Bio';
import BottomTab from './src/stack/SubStack/BottomTab';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: COLOR.secondary }}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <SplashStack></SplashStack>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
