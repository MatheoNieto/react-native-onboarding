import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";
import FooterProgress from "./FooterProgress";

const ScreenStep = (props) => {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollview}>{props.children}</ScrollView>
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

ScreenStep.propTypes = {
	setActiveStep: PropTypes.func,
	stepCount: PropTypes.number,
	activeStep: PropTypes.number,
	isComplete: PropTypes.bool,
	containerStyle: PropTypes.any,
	colorIcons: PropTypes.string,
};

ScreenStep.defaultProps = {
	isComplete: false,
	activeStep: 0,
	stepCount: 0,
	containerStyle: {},
	colorIcons: "#2E2E2E",
};

export default ScreenStep;
