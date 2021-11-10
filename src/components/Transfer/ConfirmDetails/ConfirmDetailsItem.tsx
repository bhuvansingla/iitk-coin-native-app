import React from "react";
import { View } from "react-native";

import Text from "components/Text";
import { LABELS } from "constant";

import styles from "./ConfirmDetails.styles";

interface ConfirmDetailsItemProps {
	key: string;
	label: string;
	value: string | number;
	rollNo?: string;
}

const ConfirmDetailsItem: React.FC<ConfirmDetailsItemProps> = (props) => {
	const { label, value, rollNo } = props;
	let suffix = "";
	if (typeof value === "number") {
		suffix = (value == 1) ? LABELS.COIN : LABELS.COINS;
	}

	return (
		<View style={styles.listItem}>
			<Text.Title style={styles.label}>{label}</Text.Title>
			<Text.Title style={styles.wrapper}>
				<Text.Title style={styles.value}>{value}{LABELS.SPACE}{suffix}</Text.Title>
				{rollNo}
			</Text.Title>
		</View>
	);
};

export default ConfirmDetailsItem;
