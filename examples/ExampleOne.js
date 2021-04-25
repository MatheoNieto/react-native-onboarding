import React from 'react'
import Onboarding from 'stepper-react-native'

const Step1 = ()=>{
  return(
    <View>
      <Text>Firt Screen</Text>
    </View>
  )
}

const Step2 = ()=>{
  return(
    <View>
      <Text>Second Screen</Text>
    </View>
  )
}

const Step3 = ()=>{
  return(
    <View>
      <Text>Third Screen</Text>
    </View>
  )
}


const steps = [
  {
    component: (<Step1 />),
  },
  {
    component: (<Step2 />),
  },
  {
    component: (<Step3 />),
  }
  
]

const ScreenOnboarding = (props) => {

  handleOnNext = ()=>{
    alert('ON next')
  }
  handleOnBack = ()=>{
    alert('ON BAck')
  }
  handleFinish = ()=>{
    alert('Oh Finish...')
  }
  return (
    <Onboarding
      screens={steps}
      onNext={()=>handleOnNext()}
      onPrevious={()=>handleOnBack()}
      onFinish={()=>handleFinish()}
      {...props}
    />
  )
}

export default ScreenOnboarding