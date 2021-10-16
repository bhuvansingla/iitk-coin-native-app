import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Text from "components/Text";
import Button from "components/Button";
import { LABELS } from "constant";
import { COLORS } from "styles";

import styles from "./RedeemSuccess.styles";

interface Props {
	txnID: string;
	onPressRedeemSuccess: () => void;
}

const RedeemSuccess: React.FC<Props> = ({txnID, onPressRedeemSuccess}) => {
	return (
		<View style={styles.container}>
			<AntDesign name="gift" size={80} color={COLORS.RED} />
			<Text.Title style={styles.title}>{LABELS.REDEEM_REQUESTED}</Text.Title>
			<Text.Title style={styles.txnID}>{LABELS.REDEEM_ID}{txnID}</Text.Title>
			<Button title={LABELS.REDEEM_FINAL} onPress={onPressRedeemSuccess} />
		</View>
	);
};

export default RedeemSuccess;
