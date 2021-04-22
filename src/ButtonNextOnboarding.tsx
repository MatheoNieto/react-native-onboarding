import React from 'react';
import { View } from 'react-native';

interface PropsButton {
  renderNextButton: any
}

const ButtonNextOnboarding = (props: PropsButton) => (
  <View>
    {props.renderNextButton()}
  </View>
);

export default ButtonNextOnboarding;