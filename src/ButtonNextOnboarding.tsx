import React from 'react';
import { View } from 'react-native';

const ButtonNextOnboarding = props => (
    <View>{props.renderNextButton()}</View>
);

export default ButtonNextOnboarding;