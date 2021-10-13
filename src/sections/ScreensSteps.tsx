import React, { Component, cloneElement } from "react";
import { View } from "react-native";

interface Props {
	isComplete: false;
	activeStep: 0;
}

interface State {
	stepCount: number;
	activeStep: number;
}

class ScreensSteps extends Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			stepCount: 0,
			activeStep: props.activeStep,
		};
	}

	componentDidMount() {
		this.setState({
			stepCount: React.Children.count(this.props.children),
		});
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps.activeStep !== this.props.activeStep) {
			this.setActiveStep(this.props.activeStep);
		}
	}

	// Callback function from ProgressStep that passes current step.
	setActiveStep = (step: number) => {
		if (step >= this.state.stepCount - 1) {
			this.setState({ activeStep: this.state.stepCount - 1 });
			return;
		}

		if (step < this.state.stepCount - 1) {
			this.setState({ activeStep: step });
		}
	};

	render() {
		if (this.state.stepCount === 0) {
			return null;
		}

		return (
			<View style={{ flex: 1 }}>
				{cloneElement(this.props.children[this.state.activeStep], {
					setActiveStep: this.setActiveStep,
					activeStep: this.state.activeStep,
					stepCount: this.state.stepCount,
				})}
			</View>
		);
	}
}

export default ScreensSteps;
