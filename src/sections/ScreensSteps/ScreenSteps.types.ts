import {ReactElement} from "react";
import {ViewStyle} from "react-native";

export type PropsScreensSteps ={
  colorIcons: string | "#2E2E2E";
  screens: ReactElement<any>[];
  containerStyle: ViewStyle;
  onFinish: () => void;
  onNext: () => void;
  onPrevious: () => void;
}