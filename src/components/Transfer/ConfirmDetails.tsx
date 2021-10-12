import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "components/Text";
import Button from "components/Button";
import { LABELS } from "constant";
import { FONT } from "styles";

interface Props {
	name: string;
	rollNo: string;
	amount: number;
	tax: number;
	onPressConfirmTransfer: () => void;
}

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

const ConfirmDetails: React.FC<Props> = (props) => {
	const { name, rollNo, amount, tax, onPressConfirmTransfer } = props;
	const totalAmount = amount - tax;

	return (
		<View style={styles.container}>
			<Text.Heading title={LABELS.TRANSFER_TITLE} />
			<DetailsListItem key={LABELS.TRANSFER_TO} label={LABELS.TRANSFER_TO} value={name} rollNo={rollNo} />
			<View style={styles.amountTaxContainer}>

				<View style={styles.halfBox}>
					<DetailsListItem key={LABELS.TRANSFER_AMOUNT} label={LABELS.TRANSFER_AMOUNT} value={amount} />
				</View>
				<View style={styles.halfBox}>
					<DetailsListItem key={LABELS.TRANSFER_TAX} label={LABELS.TRANSFER_TAX} value={tax} />
				</View>
			</View>
			<View>
				<DetailsListItem key={LABELS.TRANSFER_FINAL_AMOUNT} label={LABELS.TRANSFER_FINAL_AMOUNT} value={totalAmount} />
			</View>
			<Button title={LABELS.TRANSFER_BUTTON} onPress={onPressConfirmTransfer} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	amountTaxContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	halfBox: {
		width: "50%",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	listItem: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	}, 
	label: {
		paddingBottom: 5,
		fontSize: FONT.SIZE.SECONDARY,
		opacity: 0.7,
	},
	value: {
		opacity: 0.9,
		fontSize: FONT.SIZE.H2,
	},
	wrapper: {
		marginBottom: 15,
		fontFamily: FONT.WEIGHT.BOLD,
		opacity: 0.7,
		fontSize: FONT.SIZE.TERTIARY,
	},
});

export default ConfirmDetails;
