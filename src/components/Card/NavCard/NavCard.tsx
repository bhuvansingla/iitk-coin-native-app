import React from "react";
import { View } from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

import { Text } from "components";
import { LABELS } from "constant";

import {styles, COLOR, SIZE} from "./NavCard.styles";
import NavBtn from "./NavCard.helper";

export interface NavActionProps {
	accountAction: () => void;
	sendAction: () => void;
	redeemAction: () => void;
}

const NavCard: React.FC<NavActionProps> = ({accountAction, sendAction, redeemAction}) => {
	return (
		<View style={styles.container}>
			<NavBtn onPress={accountAction}>	
				<MaterialIcons name="account-circle" size={SIZE} color={COLOR} />
				<Text.Title style={styles.text}>{LABELS.ACCOUNT}</Text.Title>
			</NavBtn>

			<NavBtn onPress = {sendAction}>
				<View style={{left: 5}}>
					<Ionicons name="send-sharp" size={SIZE} color={COLOR} />
				</View>
				<Text.Title style={styles.text}>{LABELS.SEND}</Text.Title>
			</NavBtn>

			<NavBtn onPress={redeemAction}>
				<AntDesign name="gift" size={SIZE} color={COLOR} />
				<Text.Title style={styles.text}>{LABELS.REDEEM}</Text.Title>
			</NavBtn>
		</View>
	);
};

export default NavCard;
