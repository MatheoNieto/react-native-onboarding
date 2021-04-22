import React, { Component } from 'react'

import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { ProgressSteps, ProgressStep } from './IndexSteper'

interface Props {
  colorBackgroung: string
  screens: Array<any>
}
class Onboarding extends Component<Props> {

  constructor(props:Props) {
    super(props)
  }

  render() {
    const {colorBackgroung, screens} = this.props

    const styleScreen = {
      flex: 1,
      backgroundColor: colorBackgroung || '#fff',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Dimensions.get('window').height > 700) ? 50 : 0,

  },
  contentStep: {
    backgroundColor: 'red'
  }
})

export default Onboarding