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
import DashboardStack from '../DashboardStack';


const Stack = createNativeStackNavigator();

const Spouse = ({ setSpouseSteps }) => {
  return (
    <Stack.Navigator
      initialRouteName="Profession"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profession">
        {props => <Profession {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Describe">
        {props => <Describe {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Degree">
        {props => <Degree {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Country">
        {props => <Country {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Height">
        {props => <Height {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="MaritalStatus">
        {props => <MaritalStatus {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Gender">
        {props => <Gender {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Smoke">
        {props => <Smoke {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Children">
        {props => <Children {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
       <Stack.Screen name="LookingFor">
        {props => <LookingFor {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Religion">
        {props => <Religion {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Drink">
        {props => <Drink {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Zodiac">
        {props => <Zodiac {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Details">
        {props => <Details {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Personality">
        {props => <Personality {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="Bio">
        {props => <Bio {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
       <Stack.Screen name="Congrats">
        {props => <Congrats {...props} setSpouseSteps={setSpouseSteps} />}
      </Stack.Screen>
      <Stack.Screen name="DashboardStack">
        {props => <DashboardStack {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Spouse;
