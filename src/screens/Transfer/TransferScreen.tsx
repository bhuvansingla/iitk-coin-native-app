import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";

import { View } from "react-native";
import { Text } from "components";
import TransferForm from "components/Forms/Transfer";

import styles from "../screen.styles";

import { LABELS } from "constant";

const TransferScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const [amount, setAmount] = useState<string>("");
	const [remark, setRemark] = useState<string>("");
	const [rollno, setRollno] = useState<string>("");

	const onPressSend = () => {
		console.log(amount);
		//FIXME
	};

	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.TRANSFER_FORM_TITLE} />
			{/* TODO Wallet Balance Card */}
			<View style={styles.formContainer}>

				<TransferForm onPressSend={onPressSend} setAmount={setAmount} setRemark={setRemark} setRollno={setRollno} />

			</View>
		</View>
	);
};

export default TransferScreen;
