import React, { Component } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import StepIcon from "../elements/StepIcon";
import ButtonStep from "../elements/ButtonStep";
interface State {
	stepCount: number;
	activeStep: number;
}
interface Props {
	activeStep: number;
	stepCount: number;
	isComplete: boolean;
	colorIcons: string;
	containerStyle: ViewStyle;
	setActiveStep: (step?: number) => void;
	onFinish: () => void;
	onNext: () => void;
	onPrevious: () => void;
}
class FooterProgress extends Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			stepCount: 0,
			activeStep: props.activeStep,
		};
	}

	componentDidMount() {
		this.setState({
			stepCount: this.props.stepCount,
		});
	}

	componentDidUpdate(prevProps) {
		if (prevProps.activeStep !== this.props.activeStep) {
			this.props.setActiveStep(this.props.activeStep);
		}
	}

	getChildProps = () => {
		return { ...this.props, ...this.state };
	};

	renderStepIcons = () => {
		let step = [];

		for (let i = 0; i < this.state.stepCount; i++) {
			const isCompletedStep = this.props.isComplete
				? true
				: i < this.state.activeStep;

			const isActiveStep = this.props.isComplete
				? false
				: i == this.state.activeStep;

			step.push(
				<StepIcon
					key={i}
					isCompletedStep={isCompletedStep}
					isActiveStep={isActiveStep}
					colorIcon={this.props.colorIcons}
					{...this.getChildProps()}
				/>
			);
		}

		return step;
	};

	onNextStep = () => {
		if (this.props.activeStep === this.props.stepCount - 1) {
			this.props.onFinish && this.props.onFinish();
			return;
		}

		this.props.onNext && this.props.onNext();
		this.props.setActiveStep(this.props.activeStep + 1);
	};

	onPreviousStep = () => {
		this.props.onPrevious && this.props.onPrevious();
		this.props.setActiveStep(this.props.activeStep - 1);
	};

	render() {
		if (!this.state.stepCount) {
			return null;
		}

		return (
			<View style={[styles.styleContent, this.props.containerStyle]}>
				<ButtonStep
					finish={this.props.activeStep === this.props.stepCount - 1}
					onPress={() => this.onNextStep()}
					colorIcon={this.props.colorIcons}
					type='next'
				/>
				<View style={styles.stepIcons}>{this.renderStepIcons()}</View>
				<ButtonStep
					onPress={() => this.onPreviousStep()}
					disabled={this.props.activeStep === 0}
					colorIcon={this.props.colorIcons}
					type='previous'
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	stepIcons: {
		flexDirection: "row",
	},
	styleContent: {
		flexDirection: "row-reverse",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: "#f9f8f2",
		opacity: 1,
		paddingVertical: 10,
	},
});

export default FooterProgress;
