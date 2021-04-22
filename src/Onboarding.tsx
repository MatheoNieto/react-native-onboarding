import React, { Component } from 'react'

import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { ProgressSteps, ProgressStep } from './IndexSteper'
import { connect } from 'react-redux'

import "@expo/match-media";

class Onboarding extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { screens, color_theme } = this.props

    const styleScreen = {
      flex: 1,
      backgroundColor: color_theme,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: hp('100%')
    }
    return (
      <SafeAreaView style={styleScreen}>
        <View style={styles.container}>
          <ProgressSteps>
            {screens.map((screen, index) => (
              <ProgressStep
                key={index}
                {...this.props}
              >
                <View style={styles.contentStep}>{screen.component}</View>
              </ProgressStep>
            ))}
          </ProgressSteps>
        </View>
      </SafeAreaView>
    )
  }
}

console.log("=>Dimensions.get('window').height", Dimensions.get('window').height)
console.log("=>Dimensions.get('window').width", Dimensions.get('window').width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Dimensions.get('window').height > 700) ? 50 : 0,

  },
  contentStep: {
    backgroundColor: 'red'
  }
})

const mapStateToProps = (reducers) => {
  return reducers.setupReducer
}

export default connect(mapStateToProps)(Onboarding)