import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export const COLOR = "#305A90";
export const SIZE = FONT.SIZE.H3 * 2.3;

export const styles = StyleSheet.create({
	button : {
		alignItems : "center",
		flex : 2,
		justifyContent : "center",
		maxWidth: "30%",
	},
	container : {
		alignItems : "center",
		backgroundColor : COLORS.WHITE,
		borderRadius: 20,
		elevation: 10,
		flex : 1,
		flexDirection: "row",
		justifyContent : "space-around",
		marginBottom : 20,
		maxHeight: 100,
		minHeight: 100,
		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 20,
		width: "100%",
	},
	icon: {
		left:5
	},
	text : {
		color : COLOR,
		fontSize : FONT.SIZE.H3 * 0.55,
	}
});
