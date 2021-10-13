# react-native-onboarding

A simple and fully customizable React Native component that implements a onboardin stepper.

[Try this example on Snack](https://snack.expo.dev/@matheonieto/stepper-react-native).

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
const steps = [<Step1 />, <Step2 />, <Step3 />];

  export default function App() {
  const handleOnNext = () => {
    console.log("ON next");
  };
  const handleOnBack = () => {
    console.log("ON BAck");
  };
  const handleFinish = () => {
    console.log("Oh Finish...");
  };

  return (
    <View style={styles.container}>
      <Onboarding
        screens={steps}
        onNext={() => handleOnNext()}
        onPrevious={() => handleOnBack()}
        onFinish={() => handleFinish()}
      />
    </View>
  );
  }
```

## Documentation

### Step Component
| Props      | Type | default
| ----------- | ----------- | ----------- |
| screens      | Array < components >       | [ ] |
| onNext   | function        | undefined | 
| onPrevious   | function        | undefined | 
| onFinish   | function        | undefined | 
| colorIcons   | string        | #2E2E2E | 
| containerStyle   | objectStyle        | {} | 
## Author
Mateo Nieto | [https://mateonietohoyos.com/](https://mateonietohoyos.com)

## License
[MIT](./LICENSE)