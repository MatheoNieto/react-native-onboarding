import React, { Component } from "react";
import { View, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import ScreensSteps from "./ScreensSteps";
import ScreenStep from "./ScreenStep";

class Onboarding extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { screens } = this.props;

		const styleScreen = {
			flex: 1,
			flexDirection: "column",
			justifyContent: "space-between",
			height: Dimensions.get("window").height,
		};

		return (
			<SafeAreaView style={styleScreen}>
				<View style={styles.container}>
					<ScreensSteps>
						{screens.map((screen, index) => (
							<ScreenStep key={index} {...this.props}>
								{screen}
							</ScreenStep>
						))}
					</ScreensSteps>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Dimensions.get("window").height > 700 ? 50 : 0,
	},
});

export default Onboarding;
