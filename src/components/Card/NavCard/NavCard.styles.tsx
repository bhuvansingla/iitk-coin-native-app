import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export const COLOR = "#305A90";
export const SIZE = FONT.SIZE.H3 * 2.3;

export const styles = StyleSheet.create({
	container : {
		width: "100%",
		minHeight: 100,
		maxHeight: 200,
		borderRadius: 20,
		flex : 1,
		flexDirection: "row",
		justifyContent : "space-around",
		alignItems : "center",
		shadowRadius: 20,
		shadowColor: COLORS.BLACK,
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 4 },
		elevation: 4,
		backgroundColor : COLORS.WHITE,
		marginBottom : 20,
	},
	text : {
		fontSize : FONT.SIZE.H3 * 0.55,
		color : COLOR,
	},
	button : {
		flex : 2,
		alignItems : "center",
		justifyContent : "center",
		maxWidth: "30%",
	}
});
