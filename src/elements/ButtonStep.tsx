import React, { FC } from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type PropsButtonStep = {
  onPress: () => void;
  colorIcon: string;
  type: 'next' | 'previous';
  disabled?: boolean;
  finish?: boolean;
};

const ButtonStep: FC<PropsButtonStep> = ({
  type: typeButton,
  finish,
  colorIcon,
  disabled,
  onPress,
}) => {
  const renderButton = () => {
    if (typeButton === 'previous') {
      return buttonBack();
    }

    return buttonNext();
  };

  const buttonNext = () => {
    if (finish) {
      return <Icon name="checkcircleo" size={40} color={colorIcon} />;
    }
    return <Icon name="rightsquareo" size={40} color={colorIcon} />;
  };

  const buttonBack = () => {
    return <Icon name="leftsquareo" size={40} color={colorIcon} />;
  };

  return (
    <Pressable onPress={() => onPress()} disabled={disabled}>
      {renderButton()}
    </Pressable>
  );
};
export default ButtonStep;
