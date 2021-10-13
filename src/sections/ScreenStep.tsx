import React from "react";
import {
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
	ViewStyle,
} from "react-native";
import FooterProgress from "./FooterProgress";

interface Props {
	isComplete: boolean;
	activeStep: 0;
	stepCount: 0;
	containerStyle: ViewStyle;
	colorIcons: "#2E2E2E";
	children: unknown;
	setActiveStep: (step?: number) => void;
	onFinish: () => void;
	onNext: () => void;
	onPrevious: () => void;
}

const ScreenStep = (props: Props) => {
	return (
		<View style={styles.container}>
			<ScrollView>{props.children}</ScrollView>
			<FooterProgress {...props} />
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
	foother: {
		bottom: 0,
		left: 0,
	},
});

export default ScreenStep;
