import {ViewStyle} from "react-native";
import React from "react";

export type ScreensType = {
	scrollable?: boolean;
	screen: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[]
}

export type ActionsBoardingType = {
	onFinish?: () => void;
	onNext?: () => void;
	onPrevious?: () => void;
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
