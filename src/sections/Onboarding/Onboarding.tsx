import React, { FC } from "react";
import {ScreensSteps} from "../ScreensSteps";
import {ScreenStep} from "../ScreenStep/";
import {PropsOnboarding} from "./Onboarding.types";


const Onboarding: FC<PropsOnboarding> = ({
	screens
}) => {
	return(
		<ScreensSteps stepActive={0}>
			{screens.map((screen, index) =>{
				return (
					<ScreenStep key={index} >
						{screen}
					</ScreenStep>
				)
			})}
		</ScreensSteps>
	)
}

export default Onboarding;
