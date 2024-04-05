import React from 'react';
import {ViewStyle} from "react-native";
import {ScreensType} from "../types";

export type DataReadContextType = {
	stepActive: number;
	stepCount: number;
	isComplete: boolean;
	screens: ScreensType[];
	config?: {
		colorIcons?: string;
		containerStyle?: ViewStyle;
		sizeIcons?: number
	}
}

export type OnboardingContextState =DataReadContextType & {
	onChangeStep: (newStep: number) => void;
	onLoadData: (data: DataReadContextType) => void;
}

export const OnboardingContext = React.createContext<OnboardingContextState>({} as OnboardingContextState);




