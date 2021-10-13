import React, { Component, ReactElement } from "react";
import {
	View,
	SafeAreaView,
	Dimensions,
	StyleSheet,
	ViewStyle,
} from "react-native";
import ScreensSteps from "./ScreensSteps";
import ScreenStep from "./ScreenStep";

interface Props {
	colorIcons: string;
	screens: Array<ReactElement>;
	containerStyle: ViewStyle;
	onFinish: () => void;
	onNext: () => void;
	onPrevious: () => void;
}
class Onboarding extends Component<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		const { screens } = this.props;

		return (
			<SafeAreaView style={styles.styleScreen}>
				<View style={styles.container}>
					<ScreensSteps>
						{screens.map((screen, index) => (
							<ScreenStep key={index} {...this.props}>
								<View style={styles.contentStep}>{screen}</View>
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
	contentStep: {
		padding: 5,
	},
	styleScreen: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		height: Dimensions.get("window").height,
	},
});

export default Onboarding;
