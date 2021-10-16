import React from "react";
import { View } from "react-native";

import Image from "components/SVGImage";

import TextInput from "./TextInput";
import styles from "./TextInput.styles";

interface Props {
	placeholder?: string;
	title: string;
	error?: string;
	onChangeText: (text: string) => void;
}

const AmountInput: React.FC<Props> = (props) => {

	return (
		<View style={styles.inputWithImageContainer}>
			<TextInput numeric {...props}	/>
			<Image name="CoinLogo" style={styles.imageStyle} />
		</View>
	);

};

export default AmountInput;
