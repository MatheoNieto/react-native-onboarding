import React, { Component } from 'react'
import { View, SafeAreaView, Dimensions, StyleSheet } from 'react-native'
import { ScreensSteps, ScreenStep } from './IndexSteper'

class Onboarding extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { screens } = this.props

    const styleScreen = {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: Dimensions.get('window').height
    }
    
    return (
      <SafeAreaView style={styleScreen}>
        <View style={styles.container}>

        <ScreensSteps>
          {screens.map((screen, index) => (
            <ScreenStep
              key={index}
              {...this.props}
            >
              <View style={styles.contentStep}>
                {screen.component}
              </View>
            </ScreenStep>
          ))}
        </ScreensSteps>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Dimensions.get('window').height > 700) ? 50 : 0,

  },
  contentStep: {
    padding: 5
  }
})

export default Onboarding