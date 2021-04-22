import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import FooterProgress from './FooterProgress';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class ProgressStep extends Component {
  

  render() {

    const scrollViewProps = this.props.scrollViewProps || {};
    const viewProps = this.props.viewProps || {};
    const isScrollable = this.props.scrollable;

    return (
      <>
        <View style={styles.container}>
          {isScrollable
            ? <ScrollView {...scrollViewProps}>{this.props.children}</ScrollView>
            : <View {...viewProps}>{this.props.children}</View>}

          <FooterProgress {...this.props} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f9f8f2',
    height: hp('100%'),
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  }
})

ProgressStep.propTypes = {
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
  scrollViewProps: PropTypes.object,
  viewProps: PropTypes.object,
  errors: PropTypes.bool,
  removeBtnRow: PropTypes.bool,
  scrollable: PropTypes.bool
};

ProgressStep.defaultProps = {
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
  scrollable: true
};

export default ProgressStep;
