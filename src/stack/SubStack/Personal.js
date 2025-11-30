import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Name from '../../screen/Personal/Steps/Name';
import Photos from '../../screen/Personal/Steps/Photos';
import Birthday from '../../screen/Personal/Steps/Birthday';
import Gender from '../../screen/Personal/Steps/Gender';
import Phone from '../../screen/Personal/Steps/Phone';
import Verification from '../../screen/Personal/Steps/Verification';

const Stack = createNativeStackNavigator();

const Personal = ({ setSteps }) => {
  return (
    <Stack.Navigator
      initialRouteName="Name"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Name">
        {props => <Name {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Photos">
        {props => <Photos {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Birthday">
        {props => <Birthday {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Gender">
        {props => <Gender {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Phone">
        {props => <Phone {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Verification">
        {props => <Verification {...props} setSteps={setSteps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Personal;
