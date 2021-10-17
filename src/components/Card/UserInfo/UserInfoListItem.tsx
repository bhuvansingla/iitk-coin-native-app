import React from "react";
import { View } from "react-native";

import Text from "components/Text";

import styles from "./UserInfo.styles";

interface Props {
	key: string;
	title: string;
	value: string;
}

const UserInfoListItem: React.FC<Props> = ({ title, value }) => {
	return (
		<View style={styles.itemContainer}>
			<Text.Title semibold style={styles.title} >{title}</Text.Title>
			<View style={styles.row}>
				<Text.Title bold style={styles.value} >{value}</Text.Title>
			</View>
		</View>
	);
};

export default UserInfoListItem;
