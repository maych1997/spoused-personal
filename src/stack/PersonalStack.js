import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import PersonalHeader from '../components/PersonalHeader';
import Personal from './SubStack/Personal';
import Spouse from './SubStack/Spouse';
import StepIndicator from 'react-native-step-indicator';
import { COLOR } from '../utils/colors';
import { Text, View } from 'react-native';
import Tick from '../assets/icons/tick';
import SpouseHeader from '../components/SpouseHeader';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const Stack = createNativeStackNavigator();

const PersonalStack = () => {
  const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [steps, setSteps] = useState(0);
  const [spouseSteps, setSpouseSteps] = useState(0);
  return (
    <Stack.Navigator initialRouteName="Personal">
      <Stack.Screen
        name="Personal"
        options={{
          header: ({ navigation }) => (
            <>
              <PersonalHeader
                setSteps={setSteps}
                steps={steps}
                navigation={navigation}
                title="Tell us a bit about yourself"
              />
              {steps < 5 && (
                <View style={{backgroundColor: COLOR.other, paddingVertical: hp('0.5%')}}>
                  <StepIndicator
                  currentPosition={steps}
                  renderStepIndicator={({ stepStatus, position }) => {
                    return (
                      <View>
                        {stepStatus == 'finished' ? (
                          <Tick></Tick>
                        ) : (
                          <Text style={{ fontSize: 14, fontWeight: '600' }}>
                            {position + 1}
                          </Text>
                        )}
                      </View>
                    );
                  }}
                  customStyles={{
                    stepStrokeWidth: 0,
                    separatorStrokeWidth: 2,
                    stepStrokeCurrentColor: COLOR.primary,
                    stepIndicatorUnFinishedColor: COLOR.stepUnfinished,
                    separatorFinishedColor: COLOR.primary,
                    separatorUnFinishedColor: COLOR.stepUnfinished,
                    stepIndicatorCurrentColor: COLOR.primary,
                    stepIndicatorFinishedColor: COLOR.primary,
                    stepIndicatorLabelFinishedColor: COLOR.secondary,
                    stepIndicatorLabelUnFinishedColor: COLOR.stepUnfinished,
                    stepStrokeFinishedColor: COLOR.stepUnfinished,
                  }}
                  labels={[]}
                ></StepIndicator>
                </View>
              )}
            </>
          ),
        }}
      >
        {props => <Personal {...props} setSteps={setSteps} />}
      </Stack.Screen>
      <Stack.Screen
        name="Spouse"
        options={{
          header: ({ navigation }) =>
            spouseSteps < 16 ? (
              <>
                <SpouseHeader
                  setSpouseSteps={setSpouseSteps}
                  spouseSteps={spouseSteps}
                  navigation={navigation}
                  title={
                    spouseSteps < 7
                      ? 'Help us find better matches for you'
                      : 'Complete your Profile'
                  }
                />
                {spouseSteps == 16 ? (
                  <></>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: wp('0.5%'),
                      justifyContent: 'center',
                      backgroundColor: COLOR.other,
                    }}
                  >
                    {labels.map(item => {
                      return (
                        <View
                          style={{
                            width: width / hp('2.3%'),
                            height: hp('0.5%'),
                            borderRadius: 10,
                            backgroundColor:
                              item <= spouseSteps ? COLOR.primary : COLOR.grey,
                          }}
                        ></View>
                      );
                    })}
                  </View>
                )}
              </>
            ) : (
              <></>
            ),
        }}
      >
        {props => (
          <Spouse
            {...props}
            labels={labels}
            spouseSteps={spouseSteps}
            setSpouseSteps={setSpouseSteps}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default PersonalStack;
