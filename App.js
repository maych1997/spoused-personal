import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { COLOR } from './src/utils/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {AuthProvider} from './src/provider/AuthContext';
import AuthStack from './src/stack/AuthStack';

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: COLOR.secondary }}>
      <GestureHandlerRootView>
        <AuthProvider>
          <NavigationContainer>
            <AuthStack></AuthStack>
          </NavigationContainer>
        </AuthProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
