import React from 'react';
import {OnboardingProvider} from "./store/context";
import Onboarding from "./sections/Onboarding/Onboarding";
import {MainPropsType} from "./types";


const Main: React.FC<MainPropsType> = ({...props})=> {

	return (
		<OnboardingProvider>
			<Onboarding  {...props} />
		</OnboardingProvider>
	)
}

export default Main
