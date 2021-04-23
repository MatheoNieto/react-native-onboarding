import React, { Component } from 'react'

import { View, StyleSheet } from 'react-native'

import { StepScreen, StepsScreens } from './IndexSteper'

interface Props {
  screens: Array<any>
  onFinish?: (event:Event) => void
  onNext?: (event:Event)=> void
  onPrevious?: (event:Event)=> void
}

class Onboarding extends Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    const { screens } = this.props

    return (
      <View style={styles.container}>
        <StepsScreens>
          {screens.map((screen, index) => (
            <StepScreen
              key={index}
              {...this.props}
            >
              <View style={styles.contentStep}>{screen.component}</View>
            </StepScreen>
          ))}
        </StepsScreens>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  contentStep: {
    backgroundColor: 'red'
  }
})

export default Onboarding