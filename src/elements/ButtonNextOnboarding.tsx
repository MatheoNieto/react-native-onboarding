import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const ButtonNextOnboarding = (props) => (
	<TouchableOpacity onPress={() => props.onPress()} disabled={props.disabled}>
		{props.finish ? (
			<Icon name='checkcircleo' size={40} color={props.colorIcon} />
		) : (
			<Icon name='rightsquareo' size={40} color={props.colorIcon} />
		)}
	</TouchableOpacity>
);

export default ButtonNextOnboarding;
