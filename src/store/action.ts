import {ConfigTypes} from "../types";

export type ActionsType =
	| {
	type: 'loadConfig'; payload: ConfigTypes;
}
	| {
	type: 'changeStep'; payload: {
		stepActive: number;
		isComplete?: boolean;
	}
}
	|{
	type: 'loadSteps'; payload: {
		stepActive: number;
		stepCount: number;
	}
}
