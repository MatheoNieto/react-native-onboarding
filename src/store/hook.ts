import { useContext } from 'react';
import {OnboardingContext} from "./context";


export const useBoarding = () => {
	const dataContext= useContext(OnboardingContext);

	return {
		...dataContext
	}
}
