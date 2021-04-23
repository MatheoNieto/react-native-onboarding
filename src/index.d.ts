import { Component } from 'react'
import { ViewProps } from 'react-native'

export interface OnboardingProps extends ViewProps {
  screens: Array<any>
  onFinish?: (event:Event) => void
  onNext?: (event:Event)=> void
  onPrevious?: (event:Event)=> void
}

export default class Onboarding extends Component<OnboardingProps> {}