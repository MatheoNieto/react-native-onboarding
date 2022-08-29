import React, {FC} from "react";
import { View, StyleSheet } from "react-native";

type PropsStepIcon = {
	isActiveStep: boolean;
	isCompletedStep: boolean;
	colorIcon: string;
}

const StepIcon:FC<PropsStepIcon> = ({isActiveStep, colorIcon, isCompletedStep}) => {
	let styles = StyleSheet.create({
		container: {
			backgroundColor: "transparent",
			flexDirection: "column",
			alignItems: "center",
		},
		circleStyle: {},
	});

	if (isActiveStep) {
		styles["circleStyle"] = {
			width: 25,
			height: 25,
			borderRadius: 20,
			backgroundColor: colorIcon,
			borderColor: colorIcon,
			borderWidth: 2,
			bottom: 2,
			marginHorizontal: 10,
		};
	} else if (isCompletedStep) {
		styles["circleStyle"] = {
			width: 25,
			height: 25,
			borderRadius: 18,
			backgroundColor: colorIcon,
			opacity: 1,
			marginHorizontal: 5,
		};
		styles["circleText"] = {
			alignSelf: "center",
			top: 18 / 2,
		};
	} else {
		styles["circleStyle"] = {
			width: 25,
			height: 25,
			borderRadius: 18,
			backgroundColor: "transparent",
			marginHorizontal: 5,
			borderColor: colorIcon,
			borderWidth: 2,
		};
	}

	return (
		<View style={styles.container}>
			<View style={styles.circleStyle}></View>
		</View>
	);
};

export default StepIcon;
