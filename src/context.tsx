import React, { useState, useContext } from 'react';

type OnboardingContextState ={
	colorIcons: string;
	stepActive: number;
	stepCount: number;
	isComplete: boolean
}

const OnboardingContext = React.createContext<OnboardingContextState>({
	colorIcons: '#2E2E2E',
	stepActive: 0,
	stepCount: 0,
	isComplete: false
});
