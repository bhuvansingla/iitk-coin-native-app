import React from "react";
import { View } from "react-native";

import Image from "components/SVGImage";

import TextInput, { Props } from "./TextInput";
import styles from "./TextInput.styles";

const AmountInput: React.FC<Props> = (props) => {

	const coinStyle = props.error ? styles.errorImageStyle : styles.imageStyle;
	
	return (
		<View style={styles.amountInputContainer}>
			<TextInput numeric {...props}	/>
			<Image name="CoinLogo" style={coinStyle} />
		</View>
	);

};

export default AmountInput;
