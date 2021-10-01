import React from "react";
import { TextInput as TextInputRN, View } from "react-native";

import Text from "../Text";
import styles from "./TextInput.styles";
interface Props {
	placeholder?: string;
	title: string;
	value: string;
	onChangeText: (text: string) => void;
}

const TextInput: React.FC<Props> = (props) => {

	const { onChangeText, value, placeholder, title } = props;

	return (

		<View style={styles.container}>

			<Text.Title style={styles.containerTitle}>{title}</Text.Title>

			<TextInputRN
				placeholder={placeholder}
				style={styles.input}
				onChangeText={onChangeText}
				value={value}
			/>

		</View>
	);

};

export default TextInput;
