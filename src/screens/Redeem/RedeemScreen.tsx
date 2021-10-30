import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";

import { AppState } from "redux-store/reducers";
import { setCurrentScreen } from "redux-store/actions";
import { Text, WalletBalance, Redeem } from "components";
import { LABELS } from "constant";
import VerifyOtpForm from "components/Forms/VerifyOtp";
import { ScreenType } from "screens/screen.types";
import { validator } from "utils";
import RedeemForm from "components/Forms/Redeem";
import { requestOtp, redeemRequest } from "callbacks";
import { wallet } from "api";

import styles from "../screen.styles";

const RedeemScreen: () => JSX.Element = () => {

	const enum RedeemStage {
		FORM = "REDEEM FORM",
		VERIFY_OTP = "VERIFY OTP",
		SUCCESS = "SUCCESS"
	}

	const dispatch = useDispatch();

	const coins: number = useSelector((state: AppState) => state.user.coins);
	const rollNo: string = useSelector((state: AppState) => state.user.rollNo);

	const [redeemStage, setRedeemStage] = useState<RedeemStage>(RedeemStage.FORM);

	const [amount, setAmount] = useState<number>(0);
	const [item, setItem] = useState<string>("");

	const [otp, setOTP] = useState<string>("");
	const [txnID, setTxnID] = useState<string>("");

	const [clickedRequest, setClickedRequest] = useState(false);
	const [clickedVerifyOtp, setClickedVerifyOtp] = useState(false);

	const [redeemFormError, setRedeemFormError] = useState(validator.forms.redeem.emptyError);
	const [verifyOTPError, setVerifyOTPError] = useState(validator.forms.verifyOTP.emptyError);

	const onPressRequest = () => {
		setClickedRequest(true);
		const currentRedeemFormError = validator.forms.redeem.validate(item, amount, coins);
		setRedeemFormError(currentRedeemFormError);

		if (validator.forms.redeem.isError(currentRedeemFormError)) {
			setClickedRequest(false);
			return;
		}
		
		requestOtp({RollNo: rollNo}).then((success) => {
			if (success) {
				setRedeemStage(RedeemStage.VERIFY_OTP);
			}
		}).catch(() => {
			setClickedRequest(false);
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

		const params: wallet.RedeemNewParams = {
			NumCoins: amount,
			ReceiverRollNo: rollNo,
			Item: item,
			OTP: otp
		};

		redeemRequest(params).then((txid) => {
			if (txid) {
				setTxnID(txid);
				setRedeemStage(RedeemStage.SUCCESS);
			} else {
				dispatch(setCurrentScreen(ScreenType.HOME));
			}
		}).catch(() => {
			setClickedRequest(false);
		});
	};

	const onPressRedeemSuccess = () => {
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	const onPressBack = () => {
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	return (
		<View style={styles.contentContainer}>
			<Text.PageTitle title={LABELS.REDEEM_FORM_TITLE} onPressBack={onPressBack} />

			<WalletBalance coins={coins} />

			<View style={styles.containerChildWrapper}>

				{redeemStage === RedeemStage.FORM &&
					<React.Fragment>
						<RedeemForm onPressRequest={onPressRequest} setAmount={setAmount} setItem={setItem} errors={redeemFormError} isClicked={clickedRequest} />
					</React.Fragment>
				}
				{redeemStage === RedeemStage.VERIFY_OTP &&
					<React.Fragment>
						<VerifyOtpForm setOTP={setOTP} onPressSubmit={onPressSubmit} errors={verifyOTPError} isClicked={clickedVerifyOtp} />
					</React.Fragment>
				}
				{redeemStage === RedeemStage.SUCCESS &&
					<React.Fragment>
						<Redeem.RedeemSuccess txnID={txnID} onPressRedeemSuccess={onPressRedeemSuccess} />
					</React.Fragment>
				}

			</View>
		</View>
	);
};

export default RedeemScreen;
