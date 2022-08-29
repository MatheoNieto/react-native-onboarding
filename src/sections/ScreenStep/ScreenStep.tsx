import React, {FC} from "react";
import {
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
} from "react-native";
import {FooterProgress} from "../FooterProgress";
import {PropsScreenStep} from "./ScreenStep.types";

const ScreenStep:FC<PropsScreenStep> = ({
	isComplete,
	activeStep,
	stepCount,
	containerStyle,
	colorIcons,
	children,
	setActiveStep,
	onFinish,
	onNext,
	onPrevious
}) => {
	return (
		<View style={styles.container}>
			<ScrollView>{children}</ScrollView>
			<FooterProgress
				setStepActive={setActiveStep}
				stepCount={stepCount}
				onPrevious={onPrevious}
				onFinish={onFinish}
				isComplete={isComplete}
				containerStyle={containerStyle}
				colorIcons={colorIcons}
				onNext={onNext}
				stepActive={activeStep}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
		flexDirection: "column",
		justifyContent: "space-between",
		width: Dimensions.get("screen").width,
	},
});

export default ScreenStep;
