import {DataReadContextType} from "./context";
import {ActionsType} from "./action";

export const boardingReducer = (state: DataReadContextType, action:ActionsType) => {
	switch (action.type) {
		case 'loadData': {
			return {...state, ...action.payload}
		}
		case 'changeStep': {
			return {...state, ...action.payload}
		}
		default: {
			throw new Error(`Unhandled action type`)
		}
	}
}
