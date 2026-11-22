import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { COLOR } from './src/utils/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { AuthProvider } from './src/provider/AuthContext';
import AuthStack from './src/stack/AuthStack';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ backgroundColor: COLOR.secondary }}>
        <GestureHandlerRootView>
          <AuthProvider>
            <NavigationContainer>
              <AuthStack></AuthStack>
            </NavigationContainer>
          </AuthProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}
