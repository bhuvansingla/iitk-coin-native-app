import React from "react";
import { View } from "react-native";

import Text from "components/Text";
import { LABELS } from "constant";

import styles from "./ConfirmDetails.styles";

interface DetailsListItemProps {
	key: string;
	label: string;
	value: string | number;
	rollNo?: string;
}

const DetailsListItem: React.FC<DetailsListItemProps> = (props) => {
	const { label, value, rollNo } = props;
	let suffix = "";
	if (typeof value === "number") {
		suffix = (value > 1) ? LABELS.COINS : LABELS.COIN;
	}

	return (
		<View style={styles.listItem}>
			<Text.Title style={styles.label}>{label}</Text.Title>
			<Text.Title style={styles.wrapper}>
				<Text.Title style={styles.value}>{value} {suffix}</Text.Title>
				{rollNo}
			</Text.Title>
		</View>
	);
};

export default DetailsListItem;
