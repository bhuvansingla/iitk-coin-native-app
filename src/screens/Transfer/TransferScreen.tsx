import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";

import { AppState } from "redux-store/reducers";
import { setCurrentScreen, setCoins } from "redux-store/actions";
import { Text, WalletBalance, Transfer } from "components";
import TransferForm from "components/Forms/Transfer";
import { LABELS } from "constant";
import VerifyOtpForm from "components/Forms/VerifyOtp";
import { ScreenType } from "screens/screen.types";
import { validator } from "utils";

import styles from "../screen.styles";

const TransferScreen: () => JSX.Element = () => {

	const enum TransferStage {
		FORM = "TRANSFER FORM",
		CONFIRM_DETAILS = "CONFIRM DETAILS",
		VERIFY_OTP = "VERIFY OTP",
		SUCCESS = "SUCCESS"
	}

	const dispatch = useDispatch();

	const coins: number = useSelector((state: AppState) => state.user.coins);
	const [transferStage, setTransferStage] = useState<TransferStage>(TransferStage.FORM);

	const [rollNo, setRollNo] = useState<string>("");
	const [name, setName] = useState<string>("");

	const [amount, setAmount] = useState<number>(0);
	const [tax, setTax] = useState<number>(0);

	const [remark, setRemark] = useState<string>("");
	const [otp, setOTP] = useState<string>("");
	const [txnID, setTxnID] = useState<string>("");

	const [transferFormError, setTransferFormError] = useState(validator.forms.transfer.emptyError);
	const [verifyOTPError, setVerifyOTPError] = useState(validator.forms.verifyOTP.emptyError);

	const onPressSend = () => {
		const currentTransferFormError = validator.forms.transfer.validate(rollNo, remark, amount, coins);
		setTransferFormError(currentTransferFormError);

		if (validator.forms.transfer.isError(currentTransferFormError)) {
			return;
		}

		console.log(rollNo, remark, amount);
		// TODO call api to get name and tax
		setName("Harshit Raj");
		setTax(1);
		setTransferStage(TransferStage.CONFIRM_DETAILS);
	};

	const onPressConfirmTransfer = () => {
		console.log(rollNo, name, tax, amount, remark);
		// TODO request otp
		setTransferStage(TransferStage.VERIFY_OTP);
	};

	const onPressSubmit = () => {
		const currentVerifyOTPError = validator.forms.verifyOTP.validate(otp);
		setVerifyOTPError(currentVerifyOTPError);

		if (validator.forms.verifyOTP.isError(currentVerifyOTPError)) {
			return;
		}

		console.log(otp);
		// TODO call api to validate transfer and get txnID
		setTxnID("OP711");
		dispatch(setCoins(coins - amount));
		setTransferStage(TransferStage.SUCCESS);
	};

	const onPressTransferSuccess = () => {
		console.log("onPressSuccess");
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	const onPressBack = () => {
		console.log("back");
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	return (
		<View style={styles.contentContainer}>
			<Text.PageTitle title={LABELS.TRANSFER_FORM_TITLE} onPressBack={onPressBack} />

			<WalletBalance coins={coins} />

			<View style={styles.containerChildWrapper}>

				{transferStage === TransferStage.FORM &&
					<React.Fragment>
						<TransferForm onPressSend={onPressSend} setAmount={setAmount} setRemark={setRemark} setRollNo={setRollNo} transferFormError={transferFormError} />
					</React.Fragment>
				}
				{transferStage === TransferStage.CONFIRM_DETAILS &&
					<React.Fragment>
						<Transfer.ConfirmDetails name={name} rollNo={rollNo} amount={amount} tax={tax} onPressConfirmTransfer={onPressConfirmTransfer} />
					</React.Fragment>
				}
				{transferStage === TransferStage.VERIFY_OTP &&
					<React.Fragment>
						<VerifyOtpForm setOTP={setOTP} onPressSubmit={onPressSubmit} verifyOTPError={verifyOTPError} />
					</React.Fragment>
				}
				{transferStage === TransferStage.SUCCESS &&
					<React.Fragment>
						<Transfer.TransferSuccess txnID={txnID} onPressTransferSuccess={onPressTransferSuccess} />
					</React.Fragment>
				}

			</View>
		</View>
	);
};

export default TransferScreen;
