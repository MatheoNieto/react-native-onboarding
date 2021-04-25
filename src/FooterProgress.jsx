import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { times } from 'lodash';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import StepIcon from './StepIcon'
import ButtonNextOnboarding from './ButtonNextOnboarding'
import ButtonPreviosOnboarding from './ButtonPreviosOnboarding'
class FooterProgress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepCount: props.stepCount,
      activeStep: props.activeStep,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeStep !== this.props.activeStep) {
      this.setActiveStep(this.props.activeStep);
    }
  }

  getChildProps() {
    return { ...this.props, ...this.state };
  }

  renderStepIcons = () => {
    let step = [];

    times(this.state.stepCount, (i) => {

      const isCompletedStep = this.props.isComplete ? true : i < this.state.activeStep;
      const isActiveStep = this.props.isComplete ? false : i == this.state.activeStep;

      step.push(
        <StepIcon
          key={i}
          {...this.getChildProps()}
          stepNum={i + 1}
          isFirstStep={i === 0}
          isLastStep={i === this.state.stepCount - 1}
          isCompletedStep={isCompletedStep}
          isActiveStep={isActiveStep}
        />
      );
    });

    console.log("==>[step]", step.length)

    return step;
  };

  onNextStep = async () => {
    this.props.onNext && (await this.props.onNext());

    this.props.setActiveStep(this.props.activeStep + 1);
  };

  onPreviousStep = () => {
    this.props.onPrevious && this.props.onPrevious();
    this.props.setActiveStep(this.props.activeStep - 1);
  };

  onSubmit = () => {
    this.props.onFinish()
  };

  renderNextButton = () => {

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    if (this.props.nextBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        onPress={this.props.activeStep === this.props.stepCount - 1 ? this.onSubmit : this.onNextStep}
        disabled={this.props.nextBtnDisabled}
      >
        {(this.props.activeStep === this.props.stepCount - 1) ?
          (<Icon name="checkcircleo" size={40} color="black" />) :
          (<Icon name="rightsquareo" size={40} color="black" />)
        }

      </TouchableOpacity>
    );
  };

  renderPreviousButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.previousBtnStyle
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.previousBtnTextStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    let textStyle = [btnTextStyle];
    if (this.props.previousBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity style={btnStyle} onPress={this.onPreviousStep} disabled={this.props.previousBtnDisabled}>
        <Icon name="leftsquareo" size={40} color="black" />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.styleContent}>
          <ButtonNextOnboarding renderNextButton={this.renderNextButton} />
          <View style={styles.stepIcons}>
            {this.renderStepIcons()}
          </View>
          <ButtonPreviosOnboarding renderPreviousButton={this.renderPreviousButton} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
  },
  stepIcons: {
    maxWidth: wp('100%'),
    flexDirection: 'row',
  },
  styleContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f9f8f2',
    opacity: 1,
    width: wp('100%'),
    paddingVertical: 10,
    height: hp('10%'),
    bottom: hp('-3%')
  }
})

FooterProgress.defaultProps = {
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
  scrollable: true
};

export default FooterProgress