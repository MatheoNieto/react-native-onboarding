import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const ButtonPreviosOnboarding = (props) => (
	<TouchableOpacity
		onPress={()=>props.onPress()}
		disabled={props.disabled}
	>
		<Icon name='leftsquareo' size={40} color={props.colorIcon} />
	</TouchableOpacity>
);

export default ButtonPreviosOnboarding;