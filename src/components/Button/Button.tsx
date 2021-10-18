import React from "react";
import Ripple from "react-native-material-ripple";

import { COLORS } from "styles";

import Text from "../Text";
import styles from "./Button.styles";

interface Props {
	title: string;
	onPress: () => void;
	yellow?: boolean;
	red?: boolean;
}

const Button: React.FC<Props> = (props) => {

	const { onPress, title, yellow, red } = props;

	const style = yellow ? styles.yellow : red ? styles.red : styles.default;
	const white = !yellow;

	return (

		<Ripple rippleOpacity={0.25}
			rippleCentered={true}
			rippleSize={3500}
			rippleColor={COLORS.DARK_TEAL}
			rippleDuration={1300}
			rippleContainerBorderRadius={20}
			onPress={onPress} 
			style={[styles.container, style]}
		>

			<Text.Title white={white} bold style={styles.text}>
				{title}
			</Text.Title>

		</Ripple>

	);

};

export default Button;
