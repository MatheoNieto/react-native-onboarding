import React, { Component, ComponentElement } from 'react'
import { View, StyleSheet, GestureResponderEvent } from 'react-native'
import { StepScreen, StepsScreens } from './IndexSteper'

interface Props {
  screens: Array<any>
  onFinish?: ((event:GestureResponderEvent)=>void )| any
  onNext?: ((event:GestureResponderEvent)=>void )| any
  onPrevious?: ((event:GestureResponderEvent)=>void )| any
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