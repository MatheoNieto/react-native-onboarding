import React, { FC } from "react";
import {ScreenStep} from "../ScreenStep/";
import {PropsOnboarding} from "./Onboarding.types";


const Onboarding: FC<PropsOnboarding> = ({
	screens
}) => {
	return(
		<>
			{screens.map((screen, index) =>{
				return (
					<ScreenStep key={index} >
						{screen}
					</ScreenStep>
				)
			})}
		</>
	)
}

export default Onboarding;
