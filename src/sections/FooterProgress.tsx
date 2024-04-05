import React from 'react';
import { View, StyleSheet } from 'react-native';

import StepIcon from '../elements/StepIcon';
import ButtonStep from '../elements/ButtonStep';
import { ActionsBoardingType } from '../types';
import { useBoarding } from '../store/hook';
import { colorDefaultIcons } from '../store/provider';

const FooterProgress: React.FC<ActionsBoardingType> = ({
  onFinish,
  onNext,
  onPrevious,
  footerStyle,
}) => {
  const { stepActive, isComplete, stepCount, onChangeStep, config } = useBoarding();
  const colorIcon = config?.colorIcons ?? colorDefaultIcons;

  const renderStepIcons = () => {
    let step = [];

    if (stepCount < 1) {
      return;
    }

    for (let i = 0; i < stepCount; i++) {
      const isCompletedStep = isComplete ? true : i < stepActive;
      const isActiveStep = isComplete ? false : i == stepActive;

      step.push(
        <StepIcon
          key={i}
          isCompletedStep={isCompletedStep}
          isActiveStep={isActiveStep}
          colorIcon={colorIcon}
        />,
      );
    }

    return step;
  };

  const onNextStep = () => {
    if (stepActive === stepCount - 1) {
      onFinish && onFinish();
      return;
    }

    onNext && onNext();
    onChangeStep(stepActive + 1);
  };

  const onPreviousStep = () => {
    onPrevious && onPrevious();
    onChangeStep(stepActive - 1);
  };

  if (!stepCount) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([styles.styleContent, footerStyle])}>
      <ButtonStep
        finish={stepActive === stepCount - 1}
        onPress={() => onNextStep()}
        colorIcon={colorIcon}
        type="next"
      />
      <View style={styles.stepIcons}>{renderStepIcons()}</View>
      <ButtonStep
        onPress={() => onPreviousStep()}
        disabled={stepActive === 0}
        colorIcon={colorIcon}
        type="previous"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stepIcons: {
    flexDirection: 'row',
  },
  styleContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f9f8f2',
    opacity: 1,
    paddingVertical: 10,
  },
});

export default FooterProgress;
