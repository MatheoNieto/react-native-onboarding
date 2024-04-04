import React from "react";
import {ViewStyle} from "react-native";
import {PropsScreenStep} from "../ScreenStep/ScreenStep.types";

export type PropsOnboarding = {
    colorIcons: string;
    screens: Array<React.FC<PropsScreenStep>>;
    containerStyle: ViewStyle;
    onFinish: () => void;
    onNext: () => void;
    onPrevious: () => void;
}
