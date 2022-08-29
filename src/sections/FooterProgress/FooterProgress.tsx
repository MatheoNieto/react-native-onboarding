import React, { useState, FC, useEffect } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import StepIcon from "../../elements/StepIcon";
import ButtonStep from "../../elements/ButtonStep";
import {PropsFooterProgress} from "./FooterProgress.types";

const FooterProgress:FC<PropsFooterProgress> = ({stepActive, setStepActive, stepCount, isComplete, colorIcons,onFinish, onNext, onPrevious, containerStyle}) => {
	useEffect(()=> {
		setStepActive(stepActive)
	},[stepActive])

	const renderStepIcons = () => {
		let step = [];

		if(stepCount < 1) {
			return;
		}

		for (let i = 0; i < stepCount; i++) {
			const isCompletedStep =isComplete
				? true
				: i < stepActive;

			const isActiveStep = isComplete
				? false
				: i == stepActive;

			step.push(
				<StepIcon
					key={i}
					isCompletedStep={isCompletedStep}
					isActiveStep={isActiveStep}
					colorIcon={colorIcons}
				/>
			);
		}

		return step;
	};

	const onNextStep = () => {
		if (stepActive === stepCount - 1) {
			onFinish && onFinish();
			return;
		}

		onNext && onNext();
		setStepActive(stepActive + 1);
	};

	const onPreviousStep = () => {
		onPrevious && onPrevious();
		setStepActive(stepActive - 1);
	};

	if (!stepCount) {
		return null;
	}

	return (
		<View style={[styles.styleContent, containerStyle]}>
			<ButtonStep
				finish={stepActive === stepCount - 1}
				onPress={() => onNextStep()}
				colorIcon={colorIcons}
				type='next'
			/>
			<View style={styles.stepIcons}>{renderStepIcons()}</View>
			<ButtonStep
				onPress={() => onPreviousStep()}
				disabled={stepActive === 0}
				colorIcon={colorIcons}
				type='previous'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	stepIcons: {
		flexDirection: "row",
	},
	styleContent: {
		flexDirection: "row-reverse",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: "#f9f8f2",
		opacity: 1,
		paddingVertical: 10,
	},
});

export default FooterProgress;
