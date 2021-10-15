import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

const COIN_FONT_SIZE = FONT.SIZE.H3 * 2;

const styles = StyleSheet.create({
	coinMargin: {
		marginTop: COIN_FONT_SIZE * 0.7,
	},
	container: {
		alignItems: "center",
		backgroundColor: COLORS.WALLET_TEAL,
		borderRadius: 20,
		elevation: 10,
		flexDirection: "row",
		marginBottom: 20,
		maxHeight: 200,
		minHeight: 100,
		position: "relative",
		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 20,
		width: "100%",
	},
	left: {
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		height: "65%",
		justifyContent: "center",
		left: -25,
		width: 100,
	},
	right: {
		alignItems: "flex-start",
		flex: 1,
		flexDirection: "column",
		height: "70%",
		justifyContent: "center",
		left: -50,
		top: 2,
	},
	row: {
		flex: 2,
		flexDirection: "row",
		top: -6,
	},
	shadow: {
		textShadowColor: COLORS.BLACK_25_PERCENT,
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 4
	},
	shadowCoinCount: {
		fontSize: COIN_FONT_SIZE,
		textShadowColor: COLORS.BLACK_25_PERCENT,
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 4
	}
});

export default styles;
