import React from 'react';
import { View } from 'react-native';

interface PropsButton {
  renderNextButton: ()=>void | any 
}

const ButtonNextOnboarding = (props: PropsButton) => (
  <View>
    {props.renderNextButton()}
  </View>
);

export default ButtonNextOnboarding;