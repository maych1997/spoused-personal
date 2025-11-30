import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import PersonalHeader from '../components/PersonalHeader';
import PersonalInfo from '../screen/Personal/PersonalInfo';
import SpouseInfo from '../screen/FindSpouse/SpouseInfo';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const labels = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
    ];
    const [steps, setSteps] = useState(0);
  return (
    <Stack.Navigator initialRouteName="PersonalInfo">
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{
          header: ({ navigation }) => (
            <PersonalHeader
              steps={steps}
              navigation={navigation}
              title="Tell us a bit about yourself"
            />
          ),
        }}
      />
      <Stack.Screen
        name="SpouseInfo"
        options={{
          header: ({ navigation }) => (
            steps<16?<PersonalHeader
              setSteps={setSteps}
              steps={steps}
              navigation={navigation}
              title={steps<7?"Help us find better matches for you":'Complete your Profile'}
            />:<></>
          ),
        }}
      >
        {props => <SpouseInfo {...props} labels={labels} steps={steps} setSteps={setSteps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
