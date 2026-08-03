import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import SplashStack from './src/stack/SplashStack';
import { COLOR } from './src/utils/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {AuthProvider} from './src/provider/AuthContext';

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: COLOR.secondary }}>
      <GestureHandlerRootView>
        <AuthProvider>
          <NavigationContainer>
            <SplashStack></SplashStack>
          </NavigationContainer>
        </AuthProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
