import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import FooterProgress from './FooterProgress';

class ScreenStep extends Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
        <View style={styles.container}>
          <ScrollView
            style={styles.scrollview}
          >
            {this.props.children}
          </ScrollView>

          <FooterProgress {...this.props} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height-hp('15%'),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scrollview: {
    height: hp('90%'),
  }
})

ScreenStep.propTypes = {
  label: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onSubmit: PropTypes.func,
  setActiveStep: PropTypes.func,
  nextBtnText: PropTypes.string,
  previousBtnText: PropTypes.string,
  finishBtnText: PropTypes.string,
  stepCount: PropTypes.number,
  nextBtnStyle: PropTypes.object,
  nextBtnTextStyle: PropTypes.object,
  nextBtnDisabled: PropTypes.bool,
  previousBtnStyle: PropTypes.object,
  previousBtnTextStyle: PropTypes.object,
  previousBtnDisabled: PropTypes.bool,
  viewProps: PropTypes.object,
  errors: PropTypes.bool,
  removeBtnRow: PropTypes.bool,
  scrollable: PropTypes.bool
};

ScreenStep.defaultProps = {
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
  scrollable: true
};

export default ScreenStep;
