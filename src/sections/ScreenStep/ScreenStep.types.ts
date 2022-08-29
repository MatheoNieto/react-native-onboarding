import {ViewStyle} from "react-native";
import {ReactElement} from "react";

export type PropsScreenStep = {
    isComplete: boolean;
    activeStep: number;
    stepCount: number;
    containerStyle: ViewStyle;
    colorIcons: string;
    children: ReactElement;
    setActiveStep: (step?: number) => void;
    onFinish: () => void;
    onNext: () => void;
    onPrevious: () => void;
}