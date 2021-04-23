import React, { Component } from 'react';
import { View } from 'react-native';
import { times } from 'lodash';

import StepIcon from './StepIcon';

interface Props {
  activeStep?:any
  isComplete?:any
  children?: any
}
class StepsScreens extends Component<Props> {
  state = {
    stepCount: 0,
    activeStep: this.props.activeStep,
  };

  componentDidMount() {
    this.setState({ stepCount: React.Children.count(this.props.children) });
  }

  componentDidUpdate(prevProps:any) {
    if (prevProps.activeStep !== this.props.activeStep) {
      this.setActiveStep(this.props.activeStep);
    }
  }

  getChildProps() {
    return { ...this.props, ...this.state };
  }

  renderStepIcons = () => {
    let step:Array<any> = [];

    times(this.state.stepCount, (i) => {
      const isCompletedStep = this.props.isComplete ? true : i < this.state.activeStep;

      const isActiveStep = this.props.isComplete ? false : i == this.state.activeStep;

      step.push(
        <View key={i}>
          <View>
            <StepIcon
              {...this.getChildProps()}
              stepNum={i + 1}
              isFirstStep={i == 0}
              isLastStep={i == this.state.stepCount - 1}
              isCompletedStep={isCompletedStep}
              isActiveStep={isActiveStep}
            />
          </View>
        </View>
      );
    });

    return step;
  };

  // Callback function from ProgressStep that passes current step.
  setActiveStep = (step:any) => {
    // Guard against setting current step higher than total step count.
    if (step >= this.state.stepCount - 1) {
      this.setState({ activeStep: this.state.stepCount - 1 });
    }

    if (step > -1 && step < this.state.stepCount - 1) {
      this.setState({ activeStep: step });
    }
  };

  render() {
    const styles = {
      stepIcons: {
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        flexDirection: 'row',
      },
    };

    return (
      <View style={{ flex: 1 }}>
        {React.cloneElement(this.props.children[this.state.activeStep], {
          setActiveStep: this.setActiveStep,
          activeStep: this.state.activeStep,
          stepCount: this.state.stepCount,
        })}
      </View>
    );
  }
}

export default StepsScreens;
