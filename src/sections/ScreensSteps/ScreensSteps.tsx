import React, {cloneElement, FC, useState, useEffect, useCallback, ReactElement} from "react";
import {ScreenStep} from "../ScreenStep";
import {PropsScreensSteps} from "./ScreenSteps.types";


const ScreensSteps: FC<PropsScreensSteps> = ({
	colorIcons,
	screens,
	containerStyle,
	onFinish,
	onNext,
	onPrevious
}) => {
	const [stepCount, setStepCount] = useState<number>(0)
	const [activeStep, setActiveStep] = useState<number>(0)
	const [childrenScreen, setChildrenScreen] = useState<ReactElement[]>([])

	const changeStep = (step) => {
		if (step < stepCount - 1) {
			setActiveStep(step)
			return
		}
		setActiveStep(stepCount - 1)
	};

	const loadScreens = useCallback(() => {
		if (screens.length === 0) {
			return
		}

		const children = screens.map((screen, index) => (
			<ScreenStep
				key={`screen-${index}`}
				activeStep={activeStep}
				setActiveStep={changeStep}
				onNext={onNext}
				colorIcons={colorIcons}
				containerStyle={containerStyle}
				stepCount={stepCount}
				isComplete={false}
				onFinish={onFinish}
				onPrevious={onPrevious}
			>
				{screen}
			</ScreenStep>
		))

		setStepCount(childrenScreen.length);
		setChildrenScreen(children)

	}, [screens])

	useEffect(() => {
		loadScreens()
	}, [loadScreens])

	if (stepCount === 0) {
		return null;
	}

	return cloneElement(childrenScreen[activeStep])
};

export default ScreensSteps;
