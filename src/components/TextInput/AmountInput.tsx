import React from "react";
import { View } from "react-native";

import Image from "components/SVGImage";

import TextInput, { Props } from "./TextInput";
import styles from "./TextInput.styles";

const AmountInput: React.FC<Props> = (props) => {

	return (
		<View style={styles.amountInputContainer}>
			<TextInput numeric {...props}	/>
			<Image name="CoinLogo" style={styles.imageStyle} />
		</View>
	);

};

export default AmountInput;
