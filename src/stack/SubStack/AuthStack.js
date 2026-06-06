import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screen/Auth/Login';
import ForgotPassword from '../../screen/Auth/ForgotPassword';
import Authentication from '../../screen/Auth/Authentication';
import PersonalStack from '../PersonalStack';
import BottomTab from './BottomTab';
import SetPassword from '../../screen/Auth/SetPassword';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../components/AuthHeader';
import { COLOR } from '../../utils/colors';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <SafeAreaView
      style={{ flex: 1,backgroundColor:COLOR.other}}
    >
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: ({ navigation }) => {
            return <AuthHeader navigation={navigation}></AuthHeader>;
          },
        }}
      >
        <Stack.Screen component={Login} name="Login"></Stack.Screen>
        <Stack.Screen
          component={ForgotPassword}
          name="ForgotPassword"
        ></Stack.Screen>
        <Stack.Screen
          component={Authentication}
          name="Authentication"
        ></Stack.Screen>
        <Stack.Screen component={SetPassword} name="SetPassword"></Stack.Screen>
        <Stack.Screen
          component={PersonalStack}
          options={{ headerShown: false }}
          name="PersonalStack"
        ></Stack.Screen>
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AuthStack;
