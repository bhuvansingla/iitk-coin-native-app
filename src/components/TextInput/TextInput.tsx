import React from "react";
import { TextInput as TextInputRN, View } from "react-native";

import Text from "../Text";
import styles from "./TextInput.styles";

export interface Props {
	placeholder?: string;
	title: string;
	password?: boolean;
	numeric?: boolean;
	error?: string;
	onChangeText: (text: string) => void;
}

const TextInput: React.FC<Props> = (props) => {

	const { onChangeText, placeholder, title, password, numeric, error } = props;
	const keyboardType = numeric ? "numeric" : "default";
	const autoCapitalize = password ? "none" : "words";
	
	return (

		<View style={styles.container}>

			<Text.Title style={styles.containerTitle}>{title}</Text.Title>

			<TextInputRN
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={password}
				onChangeText={onChangeText}
				keyboardType={keyboardType}
				autoCapitalize={autoCapitalize}
			/>

			{Boolean(error) &&
					<Text.Title red style={styles.error}>{error}</Text.Title>
			}

		</View>
	);

};

export default TextInput;
