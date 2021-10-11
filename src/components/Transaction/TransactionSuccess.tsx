import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Text from "components/Text";
import Button from "components/Button";
import { LABELS } from "constant";
import { FONT, COLORS } from "styles";

interface Props {
	txnID: string;
	onPress: () => void;
}

const TransactionSuccess: React.FC<Props> = ({txnID, onPress}) => {
	return (
		<View style={styles.container}>
			<AntDesign name="checkcircle" size={80} color={COLORS.TEAL} />
			<Text.Title style={styles.title}>{LABELS.TRANSFER_SUCCESS}</Text.Title>
			<Text.Title style={styles.txnID}>{LABELS.TRANSFER_TXNID}{txnID}</Text.Title>
			<Button title={LABELS.TRANSFER_FINISH} onPress={onPress} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 44,
		flexDirection: "column",
		maxHeight:	"50%",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		marginTop: 15,
		marginBottom: 5,
		fontSize: FONT.SIZE.H2,
		opacity: 1,
		fontFamily: FONT.WEIGHT.SEMI_BOLD,

	},
	txnID: {
		fontFamily: FONT.WEIGHT.REGULAR,
		fontSize: FONT.SIZE.TERTIARY,
		opacity: 0.8,
		marginBottom: 30,
	},
});

export default TransactionSuccess;
