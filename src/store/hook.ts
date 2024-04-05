import { useContext } from 'react';
import {OnboardingContext} from "./context";


export const useBoardingContext = () => {
	const dataContext= useContext(OnboardingContext);

	return {
		...dataContext
	}
}
