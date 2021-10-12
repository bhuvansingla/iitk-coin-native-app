import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Text from "components/Text";
import Button from "components/Button";
import { LABELS } from "constant";
import { COLORS } from "styles";

import styles from "./TransferSuccess.styles";

interface Props {
	txnID: string;
	onPressTransferSuccess: () => void;
}

const TransferSuccess: React.FC<Props> = ({txnID, onPressTransferSuccess}) => {
	return (
		<View style={styles.container}>
			<AntDesign name="checkcircle" size={80} color={COLORS.TEAL} />
			<Text.Title style={styles.title}>{LABELS.TRANSFER_SUCCESS}</Text.Title>
			<Text.Title style={styles.txnID}>{LABELS.TRANSFER_TXNID}{txnID}</Text.Title>
			<Button title={LABELS.TRANSFER_FINISH} onPress={onPressTransferSuccess} />
		</View>
	);
};

export default TransferSuccess;
