import React from "react";
import Ripple from "react-native-material-ripple";

import { COLORS } from "styles";

import {styles} from "./NavCard.styles";

interface BtnProps {
	children: React.ReactNode;
	onPress: () => void;
}

const NavBtn: React.FC<BtnProps> = (props: BtnProps) => {
	return (
		<Ripple
			rippleDuration={360}
			rippleColor={COLORS.DARK_TEAL}
			rippleContainerBorderRadius={20}
			style={styles.button} 
			onPress={props.onPress}>

			{props.children}
			
		</Ripple>
	);
};
export default NavBtn;
