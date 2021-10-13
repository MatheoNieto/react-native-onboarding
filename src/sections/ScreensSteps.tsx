import React, { Component, cloneElement } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

class ScreensSteps extends Component {
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

	componentDidUpdate(prevProps) {
		if (prevProps.activeStep !== this.props.activeStep) {
			this.setActiveStep(this.props.activeStep);
		}
	}

	// Callback function from ProgressStep that passes current step.
	setActiveStep = (step) => {
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

ScreensSteps.propTypes = {
	isComplete: PropTypes.bool,
	activeStep: PropTypes.number,
	topOffset: PropTypes.number,
	marginBottom: PropTypes.number,
};

ScreensSteps.defaultProps = {
	isComplete: false,
	activeStep: 0,
	topOffset: 30,
	marginBottom: 50,
};

export default ScreensSteps;
