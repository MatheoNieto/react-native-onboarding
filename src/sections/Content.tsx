import React from 'react';
import { useBoarding } from '../store/hook';
import { ActionsBoardingType, ScreensType } from '../types';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import FooterProgress from './FooterProgress';

const ContentComponent: React.FC<ActionsBoardingType> = (props) => {
  const { screens, stepActive } = useBoarding();

  const getComponent = React.useMemo(() => {
    const CustomComponent: ScreensType['screen'] = screens[stepActive].screen;
    if (!CustomComponent) return null;
    return React.cloneElement(CustomComponent);
  }, [stepActive]);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={screens[stepActive].scrollable}>{getComponent}</ScrollView>
      <FooterProgress {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width,
  },
});

export default ContentComponent;
