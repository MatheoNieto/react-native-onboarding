import React from 'react';
import {ViewStyle} from "react-native";

export type OnboardingContextState ={
	stepActive: number;
	stepCount: number;
	isComplete: boolean;
	config?: {
		colorIcons?: string;
		containerStyle?: ViewStyle;
		sizeIcons?: number
	}
}

const colorDefaultIcons =  '#2E2E2E'
const sizeDefaultIcons =  25

const OnboardingContext = React.createContext<OnboardingContextState>({
	stepActive: 0,
	stepCount: 0,
	isComplete: false,
	config:{
		colorIcons: colorDefaultIcons,
		sizeIcons: sizeDefaultIcons,
	}
});

type OnboardingProviderProps = {
	children: JSX.Element | JSX.Element[]
}

export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({children})=> {
	const INITIAL_STATE = {
		stepActive: 0,
		stepCount: 0,
		isComplete: false,
		config:{
			colorIcons: colorDefaultIcons,
			sizeIcons: sizeDefaultIcons,
		}
	}

	return (
		<OnboardingContext.Provider value={INITIAL_STATE}>
			{children}
		</OnboardingContext.Provider>
	)
}

export const useOnboardingContext = React.useContext(OnboardingContext);
