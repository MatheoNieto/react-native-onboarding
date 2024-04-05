import React from "react";
import {useBoarding} from "../store/hook";
import ContentComponent from "./Content";
import { MainPropsType} from "../types";

const Onboarding: React.FC<MainPropsType> = ({
	                                             config,
	                                             screens,
	                                             onPrevious,
	                                             footerStyle,
	                                             onNext,
	                                             onFinish
}) => {
	const {onLoadData} = useBoarding()

	React.useEffect(()=> {
		onLoadData({
			stepCount: screens.length,
			isComplete: false,
			stepActive: 0,
			screens: screens,
			config
		})
	}, [config, screens])

	return(
		<ContentComponent
			onFinish={onFinish}
			onNext={onNext}
			onPrevious={onPrevious}
			footerStyle={footerStyle}
		/>
	)
}


export default Onboarding;
