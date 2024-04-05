import {ViewStyle} from "react-native";
import React from "react";

export type ScreensType = {
	scrollable?: boolean;
	screen: React.ReactElement
}

export type ActionsBoardingType = {
	onFinish?: () => void;
	onNext?: () => void;
	onPrevious?: () => void;
	footerStyle?: ViewStyle;
}

export type ConfigTypes = {
	colorIcons?: string;
	containerStyle?: ViewStyle;
	sizeIcons?: number
}

export type MainPropsType = ActionsBoardingType & {
	screens: ScreensType[];
	config?: ConfigTypes
}
