import React from "react";
import Ripple from "react-native-material-ripple";

import { COLORS } from "styles";

import Text from "../Text";
import styles from "./Button.styles";

interface Props {
	title: string;
	onPress: () => void;
	disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {

	const { onPress, title, disabled } = props;
	const rippleStyle = disabled ? styles.rippleDisabled : styles.rippleEnabled;
	return (

		<Ripple rippleOpacity={0.25}
			rippleSize={3500}
			rippleColor={COLORS.DARK_TEAL}
			rippleDuration={1300}
			rippleContainerBorderRadius={20}
			onPress={onPress} 
			style={[styles.container, rippleStyle]}
			disabled={disabled}
		>

			<Text.Title white bold style={styles.text}>
				{title}
			</Text.Title>

		</Ripple>

	);

};

export default Button;
