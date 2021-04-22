import React from 'react';
import { View } from 'react-native';

interface PropsButton{
  renderPreviousButton:any
}

const ButtonPreviosOnboarding = (props:PropsButton) => (
  <View>
    {props.renderPreviousButton()}
  </View>
);

export default ButtonPreviosOnboarding;