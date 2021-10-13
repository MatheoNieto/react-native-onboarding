import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
	isActiveStep: boolean;
	isCompletedStep: boolean;
	colorIcon: string;
}

const StepIcon = (props: Props) => {
	let styles = StyleSheet.create({
		container: {
			backgroundColor: "transparent",
			flexDirection: "column",
			alignItems: "center",
		},
		circleStyle: {},
	});

	if (props.isActiveStep) {
		styles["circleStyle"] = {
			width: 25,
			height: 25,
			borderRadius: 20,
			backgroundColor: props.colorIcon,
			borderColor: props.colorIcon,
			borderWidth: 2,
			bottom: 2,
			marginHorizontal: 10,
		};
	} else if (props.isCompletedStep) {
		styles["circleStyle"] = {
			width: 25,
			height: 25,
			borderRadius: 18,
			backgroundColor: props.colorIcon,
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
			borderColor: props.colorIcon,
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
