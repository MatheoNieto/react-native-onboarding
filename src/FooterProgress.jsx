import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { times } from 'lodash';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import StepIcon from './StepIcon'
import ButtonNextOnboarding from './ButtonNextOnboarding'
import ButtonPreviosOnboarding from './ButtonPreviosOnboarding'

import { connect } from 'react-redux'
import { saveSetupAccount } from '../../store/actions/setupAction'


class FooterProgress extends Component {
  constructor(props){
    super(props)

    this.state = {
      stepCount: props.stepCount,
      activeStep: props.activeStep,
    };
  }

  componentDidMount() {
    this.setState({ stepCount: 6 });
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

    return step;
  };

  onNextStep = async () => {
    this.props.onNext && (await this.props.onNext());

    // Return out of method before moving to next step if errors exist.
    if (this.props.errors) {
      return;
    }

    this.props.setActiveStep(this.props.activeStep + 1);
  };

  onPreviousStep = () => {
    // Changes active index and calls previous function passed by parent
    this.props.onPrevious && this.props.onPrevious();
    this.props.setActiveStep(this.props.activeStep - 1);
  };

  onSubmit = () => {
    this.props.saveSetupAccount()
    this.props.navigation.navigate({ routeName: 'Dashboard' })
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
          (<AntDesign name="checkcircleo" size={40} color="black" />) :
          (<AntDesign name="rightsquareo" size={40} color="black" />)
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
        <AntDesign name="leftsquareo" size={40} color="black" />
      </TouchableOpacity>
    );
  };

  render() {
    const windowHeight = Dimensions.get('window').height
    const styleContainer = ({
    
      textIOS: {
       bottom: (windowHeight > 750) ? -70 : -90
      },
      textAndroid: {
        flex:1,
         bottom: (windowHeight < 772) ? 90 : 110
      },
      });

     

    let styleContent = {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#f9f8f2',
      opacity: 1,
      width: wp('100%'),
      paddingVertical: 10,
      height: hp('10%')
    }

    if (Platform.OS == 'ios') {
      styleContent['bottom'] = hp('20%')
    } else {
      styleContent['bottom'] = (Dimensions.get('window').height > 684) ? hp('-2%') : hp('-3%')
    }

    return (
      // <View style={styleContainer}>
      <View style={Platform.OS == 'ios' ? styleContainer.textIOS : styleContainer.textAndroid}> 
        <View style={styleContent}>
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
  stepIcons: {
    maxWidth: wp('100%'),
    flexDirection: 'row',
  },
})


FooterProgress.defaultProps = {
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
  scrollable: true
};

const mapStateToProps = (reducers) => {
  return reducers.setupReducer
}

const mapDispatchToProps = (dispatch) => ({
  saveSetupAccount: (payload) => dispatch(saveSetupAccount(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FooterProgress)