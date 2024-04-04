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
	children, ...rest
										}) => {
	return (
		<View style={styles.container}>
			<ScrollView>{children}</ScrollView>
			<FooterProgress {...rest} />
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
