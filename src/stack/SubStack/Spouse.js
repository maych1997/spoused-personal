import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gender from '../../screen/FindSpouse/Steps/Gender';
import Profession from '../../screen/FindSpouse/Steps/Profession';
import Describe from '../../screen/FindSpouse/Steps/Describe';
import Degree from '../../screen/FindSpouse/Steps/Degree';
import Country from '../../screen/FindSpouse/Steps/Country';
import Height from '../../screen/FindSpouse/Steps/Height';
import MaritalStatus from '../../screen/FindSpouse/Steps/MaritalStatus';
import Smoke from '../../screen/FindSpouse/Steps/Smoke';
import Children from '../../screen/FindSpouse/Steps/Children';
import Religion from '../../screen/FindSpouse/Steps/Religion';
import LookingFor from '../../screen/FindSpouse/Steps/LookingFor';
import Zodiac from '../../screen/FindSpouse/Steps/Zodiac';
import Drink from '../../screen/FindSpouse/Steps/Drink';
import Details from '../../screen/FindSpouse/Steps/Details';
import Personality from '../../screen/FindSpouse/Steps/Personality';
import Bio from '../../screen/FindSpouse/Steps/Bio';
import Congrats from '../../screen/FindSpouse/Steps/Congrats';


const Stack = createNativeStackNavigator();

const Spouse = ({ setSteps }) => {
  return (
    <Stack.Navigator
      initialRouteName="Profession"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profession">
        {props => <Profession {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Describe">
        {props => <Describe {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Degree">
        {props => <Degree {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Country">
        {props => <Country {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Height">
        {props => <Height {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="MaritalStatus">
        {props => <MaritalStatus {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Gender">
        {props => <Gender {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Smoke">
        {props => <Smoke {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Children">
        {props => <Children {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="LookingFor">
        {props => <LookingFor {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Religion">
        {props => <Religion {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Drink">
        {props => <Drink {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Zodiac">
        {props => <Zodiac {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Details">
        {props => <Details {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Personality">
        {props => <Personality {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Bio">
        {props => <Bio {...props} setSteps={setSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Congrats">
        {props => <Congrats {...props} setSteps={setSteps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Spouse;
