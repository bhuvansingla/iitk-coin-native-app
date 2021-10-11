import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export default StyleSheet.create({
	container: {
		marginTop: 20,
		marginBottom: 17,
		width: "100%",
	},

	text: {
		marginBottom: 7,
		flexDirection: "row",
		opacity: 1,
		color: COLORS.BLACK,
		fontSize: FONT.SIZE.H2,
		textAlign: "left",
	},

});
