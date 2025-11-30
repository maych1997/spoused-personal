import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../utils/colors';
import StepIndicator from 'react-native-step-indicator';
import Personal from '../../stack/SubStack/Personal';
import Tick from '../../assets/icons/tick'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const PersonalInfo = () => {
  const labels = [];
  const [steps, setSteps] = useState(0);

  return (
    <View style={{backgroundColor:COLOR.other,flex:1}}>
     {steps!=5? <StepIndicator
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
        labels={labels}
      ></StepIndicator>:<></>}
      <Personal setSteps={setSteps}></Personal>
      </View>
  );
};

export default PersonalInfo;
