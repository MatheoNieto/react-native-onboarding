import {DataReadContextType} from "./context";

export type ActionsType =
	| {
	type: 'loadData'; payload: DataReadContextType;
}
	| {
	type: 'changeStep'; payload: {
		stepActive: number;
		isComplete?: boolean;
	}
}
