import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

interface Props {
	onPress: () => void;
	colorIcon: string;
	type: "next" | "previous";
	disabled?: boolean;
	finish?: boolean;
}

const ButtonStep = (props: Props) => {
	const renderButton = () => {
		if (props.type === "previous") {
			return buttonBack();
		}

		return buttonNext();
	};

	const buttonNext = () => {
		if (props.finish) {
			return <Icon name='checkcircleo' size={40} color={props.colorIcon} />;
		}
		return <Icon name='rightsquareo' size={40} color={props.colorIcon} />;
	};

	const buttonBack = () => {
		return <Icon name='leftsquareo' size={40} color={props.colorIcon} />;
	};

	return (
		<TouchableOpacity onPress={() => props.onPress()} disabled={props.disabled}>
			{renderButton()}
		</TouchableOpacity>
	);
};
export default ButtonStep;
