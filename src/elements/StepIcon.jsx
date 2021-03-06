import React from 'react';
import { View, StyleSheet } from 'react-native';

const StepIcon = (props)=> {
  let styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      flexDirection: 'column',
      alignItems: 'center',
    }
  });

  if (props.isActiveStep) {
    styles['circleStyle'] = {
      width: props.sizeIcons,
      height: props.sizeIcons,
      borderRadius: 20,
      backgroundColor: props.colorIcon,
      borderColor: props.colorIcon,
      borderWidth: 2,
      bottom: 2,
      marginHorizontal: 10,
    }

  } else if (props.isCompletedStep) {
    styles['circleStyle'] = {
      width: props.sizeIcons,
      height: props.sizeIcons,
      borderRadius: 18,
      backgroundColor: props.colorIcon,
      opacity: 1,
      marginHorizontal: 5,
    }
    styles['circleText'] = {
      alignSelf: 'center',
      top: 18 / 2,
    }

  } else {
    styles['circleStyle'] = {
      width: props.sizeIcons,
      height: props.sizeIcons,
      borderRadius: 18,
      backgroundColor: 'transparent',
      marginHorizontal: 5,
      borderColor: props.colorIcon,
      borderWidth: 2,
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.circleStyle}></View>
    </View>
  );
}


export default StepIcon;