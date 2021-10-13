import React from "react";
import { TextInput as TextInputRN, View } from "react-native";

import Text from "../Text";
import styles from "./TextInput.styles";

interface Props {
	placeholder?: string;
	title: string;
	value?: string;
	password?: boolean;
	error?: string;
	onChangeText: (text: string) => void;
}

const TextInput: React.FC<Props> = (props) => {

	const { onChangeText, value, placeholder, title, password, error } = props;
	const isNotError = error == undefined || error == "";

	return (

		<View style={styles.container}>

			<Text.Title style={styles.containerTitle}>{title}</Text.Title>

			<TextInputRN
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={password}
				onChangeText={onChangeText}
				value={value}
			/>

			{!isNotError &&
					<Text.Title red style={styles.error}>{error}</Text.Title>
			}

		</View>
	);

};

export default TextInput;
