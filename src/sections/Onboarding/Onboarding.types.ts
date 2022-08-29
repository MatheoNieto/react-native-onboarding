import {ReactElement} from "react";
import {ViewStyle} from "react-native";

export type PropsOnboarding = {
    colorIcons: string;
    screens: Array<ReactElement>;
    containerStyle: ViewStyle;
    onFinish: () => void;
    onNext: () => void;
    onPrevious: () => void;
}