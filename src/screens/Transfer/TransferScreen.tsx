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
import { getName, requestOtp , transfer , getTax } from "callbacks";
import { wallet } from "api";

import styles from "../screen.styles";

const TransferScreen: () => JSX.Element = () => {

	const enum TransferStage {
		FORM = "TRANSFER FORM",
		CONFIRM_DETAILS = "CONFIRM DETAILS",
		VERIFY_OTP = "VERIFY OTP",
		SUCCESS = "SUCCESS"
	}

	const dispatch = useDispatch();

	const senderRollNo: string = useSelector((state: AppState) => state.user.rollNo);
	const coins: number = useSelector((state: AppState) => state.user.coins);
	const [transferStage, setTransferStage] = useState<TransferStage>(TransferStage.FORM);

	const[clickedSend, setClickedSend] = useState(false);
	const[clickedConfirmDetails, setClickedConfirmDetails] = useState(false);
	const[clickedVerifyOtp, setClickedVerifyOtp] = useState(false);

	const [rollNo, setRollNo] = useState<string>("");
	const [name, setName] = useState<string>("");

	const [amount, setAmount] = useState<number>(0);
	const [tax, setTax] = useState<number>(0);

	const [remark, setRemark] = useState<string>("");
	const [otp, setOTP] = useState<string>("");
	const [txnID, setTxnID] = useState<string>("");

	const [transferFormError, setTransferFormError] = useState(validator.forms.transfer.emptyError);
	const [verifyOTPError, setVerifyOTPError] = useState(validator.forms.verifyOTP.emptyError);

	const getDetails = async (rollNo: string) => {
		const name = getName(rollNo);
		const tax = getTax({NumCoins: amount, ReceiverRollNo: rollNo});
		return Promise.all([name, tax]);
	};

	const onPressSend = () => {
		setClickedSend(true);
		const currentTransferFormError = validator.forms.transfer.validate(rollNo, remark, amount, coins);
		setTransferFormError(currentTransferFormError);

		if (validator.forms.transfer.isError(currentTransferFormError)) {
			setClickedSend(false);
			return;
		}
		getDetails(rollNo).then(([name, tax]) => {
			setName(name);
			setTax(tax);
			setTransferStage(TransferStage.CONFIRM_DETAILS);
		}).catch(() => {
			setClickedSend(false);
		});
	};

	const onPressConfirmTransfer = () => {
		setClickedConfirmDetails(true);

		requestOtp({RollNo: senderRollNo})
			.then((success) => {
				if (success) {
					setTransferStage(TransferStage.VERIFY_OTP);
				}
			})
			.catch(() => {
				setClickedConfirmDetails(false);
			});
	};

	const onPressSubmit = () => {
		setClickedVerifyOtp(true);
		const currentVerifyOTPError = validator.forms.verifyOTP.validate(otp);
		setVerifyOTPError(currentVerifyOTPError);

		if (validator.forms.verifyOTP.isError(currentVerifyOTPError)) {
			setClickedVerifyOtp(false);
			return;
		}
		const params: wallet.WalletTransferParams = {
			NumCoins: amount,
			ReceiverRollNo: rollNo,
			Remarks: remark,
			OTP: otp
		};

		transfer(params)
			.then((txid) => {
				if (txid) {
					setTxnID(txid);
					dispatch(setCoins(coins - amount));
					setTransferStage(TransferStage.SUCCESS);
				} else {
					dispatch(setCurrentScreen(ScreenType.HOME));
				}
			})
			.catch(() => {
				setClickedVerifyOtp(false);
			});
	};

	const onPressTransferSuccess = () => {
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	const onPressBack = () => {
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	return (
		<View style={styles.contentContainer}>
			<Text.PageTitle title={LABELS.TRANSFER_FORM_TITLE} onPressBack={onPressBack} />

			<WalletBalance coins={coins} />

			<View style={styles.containerChildWrapper}>

				{transferStage === TransferStage.FORM &&
					<React.Fragment>
						<TransferForm onPressSend={onPressSend} setAmount={setAmount} setRemark={setRemark} setRollNo={setRollNo} errors={transferFormError} isClicked={clickedSend}/>
					</React.Fragment>
				}
				{transferStage === TransferStage.CONFIRM_DETAILS &&
					<React.Fragment>
						<Transfer.ConfirmDetails name={name} rollNo={rollNo} amount={amount} tax={tax} onPressConfirmTransfer={onPressConfirmTransfer} isClicked={clickedConfirmDetails}/>
					</React.Fragment>
				}
				{transferStage === TransferStage.VERIFY_OTP &&
					<React.Fragment>
						<VerifyOtpForm setOTP={setOTP} onPressSubmit={onPressSubmit} errors={verifyOTPError} isClicked={clickedVerifyOtp}/>
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
