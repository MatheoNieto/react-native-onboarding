import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  stepNum: any | number
  isFirstStep: boolean | false
  isLastStep: boolean | false
  isCompletedStep: boolean | false
  isActiveStep: boolean | false
}

class StepIcon extends Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    let styles: any = StyleSheet.create({
      container: {
        backgroundColor: '#f9f8f2',
        flexDirection: 'column',
        alignItems: 'center',
      }
    });

    if (this.props.isActiveStep) {
      styles['circleStyle'] = {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: '#4D4D4D',
        borderColor: '#2E2E2E',
        borderWidth: 2,
        bottom: 2,
        marginHorizontal: 10,
      }

    } else if (this.props.isCompletedStep) {
      styles['circleStyle'] = {
        width: 15,
        height: 15,
        borderRadius: 18,
        backgroundColor: '#2E2E2E',
        opacity: 1,
        marginHorizontal: 5,
      }
      styles['circleText'] = {
        alignSelf: 'center',
        top: 18 / 2,
      }

    } else {
      styles['circleStyle'] = {
        width: 15,
        height: 15,
        borderRadius: 18,
        backgroundColor: 'tranparent',
        marginHorizontal: 5,
        borderColor: '#2E2E2E',
        borderWidth: 2,
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.circleStyle}></View>
      </View>
    );
  }
}

export default StepIcon;