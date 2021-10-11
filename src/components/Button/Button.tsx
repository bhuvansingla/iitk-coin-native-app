import React from "react";
import Ripple from "react-native-material-ripple";

import { COLORS } from "styles";

import Text from "../Text";
import styles from "./Button.styles";

interface Props {
	title: string;
	onPress: () => void;

}

const Button: React.FC<Props> = (props) => {

	const { onPress, title } = props;

	return (

		<Ripple rippleOpacity={0.25}
			rippleCentered={true}
			rippleSize={3500}
			rippleColor={COLORS.DARK_TEAL}
			rippleDuration={1300}
			rippleContainerBorderRadius={20}
			onPress={onPress} style={styles.container}>

			<Text.Title white bold style={styles.text}>
				{title}
			</Text.Title>

		</Ripple>

	);

};

export default Button;
