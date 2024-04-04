import {OnboardingContextState} from "./context";
import {ActionsType} from "./action";

export const boardingReducer = (state: OnboardingContextState, action:ActionsType) => {
	switch (action.type) {
		case 'loadConfig': {
			return {...state, config: action.payload}
		}
		case 'changeStep': {
			return {...state, ...action.payload}
		}
		case 'loadSteps': {
			return {...state, ...action.payload}
		}
		default: {
			throw new Error(`Unhandled action type`)
		}
	}
}
