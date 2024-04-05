import React from 'react';
import { DataReadContextType, OnboardingContext } from './context';
import { boardingReducer } from './reducer';

type OnboardingProviderProps = {
  children: JSX.Element | JSX.Element[];
};
export const colorDefaultIcons = '#2E2E2E';
export const sizeDefaultIcons = 25;

const INITIAL_STATE: DataReadContextType = {
  stepActive: 0,
  stepCount: 0,
  isComplete: false,
  screens: [],
  config: {
    colorIcons: colorDefaultIcons,
    sizeIcons: sizeDefaultIcons,
  },
};

export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({ children }) => {
  const [boardingState, dispatch] = React.useReducer(boardingReducer, INITIAL_STATE);

  const onChangeStep = (newStep: number) => {
    dispatch({
      type: 'changeStep',
      payload: { stepActive: newStep, isComplete: boardingState.stepCount === newStep },
    });
  };

  const onLoadData = (data: DataReadContextType) => {
    dispatch({ type: 'loadData', payload: data });
  };

  const contextValue = React.useMemo(
    () => ({
      ...boardingState,
      onChangeStep,
      onLoadData,
    }),
    [boardingState, onChangeStep, onLoadData],
  );

  return <OnboardingContext.Provider value={contextValue}>{children}</OnboardingContext.Provider>;
};
