import React, {Component, cloneElement, FC, useState, useEffect, ReactElement} from "react";
import { View } from "react-native";

type PropsScreensSteps ={
	stepActive: number | 0;
	children: Array<ReactElement>;
	isComplete?: boolean | false;
}

const ScreensSteps: FC<PropsScreensSteps> = ({stepActive, children}) => {
	const [stepCount, setStepCount] = useState<number>(0)
	const [activeStep, setActiveStep] = useState<number>(stepActive)

	useEffect(()=> {
		setStepCount(React.Children.count(children));
	},[])

	const changeStep = (step) => {
		if (step < stepCount - 1) {
			setActiveStep(step)
			return
		}
		setActiveStep(stepCount - 1 )
	};

	if (stepCount === 0) {
		return null;
	}

	return (
		<>
			{cloneElement(children[activeStep], {
				setStepActive: changeStep,
				activeStep,
				stepCount,
			})}
		</>
	);
}

export default ScreensSteps;
