import React from "react";
import { View } from "react-native";

import { LABELS } from "constant";

import styles from "./UserInfo.styles";
import UserInfoListItem from "./UserInfoListItem";

interface Props {
	name: string;
	rollNo: string;
	email: string;
}

const UserInfo: React.FC<Props> = ({ name, rollNo, email }) => {
	return (
		<View style={styles.container}>

			<UserInfoListItem title={LABELS.ACCOUNT_WELCOME} value={name} />
			<UserInfoListItem title={LABELS.ACCOUNT_ROLL_NO} value={rollNo} />
			<UserInfoListItem title={LABELS.ACCOUNT_EMAIL} value={email} />
			
		</View>
	);
};

export default UserInfo;
