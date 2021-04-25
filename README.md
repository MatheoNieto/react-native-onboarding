# react-native-onboarding

A simple and fully customizable React Native component that implements a onboardin stepper.

![](assets/preview.gif) [examples/ExampleOne.js](examples/ExampleOne.js)

## Installation

yarn

```
yarn add stepper-react-native
```
npm
```
npm i stepper-react-native
```

## Usage
```
import Onboarding from 'stepper-react-native'

//components
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

//Component render inside onboarding
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
    />
  )
}

export default ScreenOnboarding
```

## Documentation

### Step Component
| Name | Description | Default | Type |
| onNext | Function called when the next step button is pressed | null | Func |
| onPrevious | Function called when the previous step button is pressed | null | Func |
| onFinish | Function called when the onFinish step button is pressed | null | Func |
## Author
Mateo Nieto | [https://mateonietohoyos.com/](https://mateonietohoyos.com/)

## License
[MIT](./LICENSE)