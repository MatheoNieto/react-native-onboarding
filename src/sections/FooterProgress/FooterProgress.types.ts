import {ViewStyle} from "react-native";

export type PropsFooterProgress = {
    stepActive: number;
    stepCount: number;
    isComplete: boolean;
    colorIcons: string;
    containerStyle: ViewStyle;
    setStepActive: (step?: number) => void;
    onFinish: () => void;
    onNext: () => void;
    onPrevious: () => void;
}