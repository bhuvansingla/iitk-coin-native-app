import React from "react";
import { View } from "react-native";
import { TextInput, Button } from "components";
import { LABELS, LENGTH } from "constant";


interface Props {
	setPassword: (password: string) => void;
	setRollNo: (rollNo: string) => void;
	onPressSignin: () => void;
}

const LoginForm: React.FC<Props> = (props) => {

	const { setPassword, setRollNo, onPressSignin } = props;

	// const [password, setPassword] = useState<string>("");
	// const [rollNo, setRollNo] = useState<string>("");

	// const dispatch = useDispatch();

	const onChangePassword = (password: string) => {
		if (password.length < LENGTH.NAME) {
			setPassword(password);
		}
	};

	const onChangeRollNo = (rollNo: string) => {
		if (rollNo.length < LENGTH.ROLL_NO) {
			setRollNo(rollNo);
		}

	};

	// const onPressSignin = () => {
	// 	const loginParams: LoginParams = { Rollno: rollNo, Password: password };
	// 	loginCallback(loginParams).then((success) => {
	// 		if (success) {
	// 			dispatch(setIsAuthenticated(true));
	// 			dispatch(setCurrentScreen(ScreenType.HOME));
	// 		}
	// 	});
	// };

	return (

		<View>

			<TextInput
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollNo}
			/>

			<TextInput
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				password={true}
				onChangeText={onChangePassword}
			/>

			<Button title={LABELS.SIGNIN_BUTTON_TEXT} onPress={() => onPressSignin()} />

		</View>

	);
};

export default LoginForm;
