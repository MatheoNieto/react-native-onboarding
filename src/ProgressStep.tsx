import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FooterProgress from './FooterProgress';

interface Props {
  scrollViewProps: any
  viewProps: any
  scrollable: any
}
class ProgressStep extends Component<Props> {
  constructor(props:Props) {
    super(props)
  }

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

          <FooterProgress 
            {...this.props} 
          />
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


export default ProgressStep;
