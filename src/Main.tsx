import React from 'react';
import Onboarding from "./sections/Onboarding/Onboarding";
import {MainPropsType} from "./types";
import {OnboardingProvider} from "./store/provider";


const Main: React.FC<MainPropsType> = ({...props})=> {

	return (
		<OnboardingProvider>
			<Onboarding  {...props} />
		</OnboardingProvider>
	)
}

export default Main
