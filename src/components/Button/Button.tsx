import React from "react";
import Ripple from "react-native-material-ripple";

import { COLORS } from "styles";

import Text from "../Text";
import styles from "./Button.styles";

interface Props {
	title: string;
	onPress: () => void;
	disabled?: boolean;
	yellow?: boolean;
	red?: boolean;
}

const Button: React.FC<Props> = (props) => {

	const { onPress, title, disabled, yellow, red } = props;
	const rippleStyle = disabled ? styles.rippleDisabled : styles.rippleEnabled;
	const backgroundStyle = yellow ? styles.yellow : red ? styles.red : styles.default;
	const white = !yellow;
	
	return (

		<Ripple rippleOpacity={0.25}
			rippleSize={3500}
			rippleColor={COLORS.DARK_TEAL}
			rippleDuration={1300}
			rippleContainerBorderRadius={20}
			onPress={onPress} 
			style={[styles.container, rippleStyle, backgroundStyle]}
			disabled={disabled}
		>

			<Text.Title white={white} bold style={styles.text}>
				{title}
			</Text.Title>

		</Ripple>

	);

};

export default Button;
