import { StyleSheet } from "react-native";

import { COLORS, LAYOUT } from "styles";

const styles = StyleSheet.create({
	about: {
		borderBottomWidth: 1,
		borderColor: COLORS.WHITE,
		margin: 5,
		padding: 2,
	},
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
	expanded: {
		alignItems: "center",
		backgroundColor: COLORS.MAIN_BG,
		height: LAYOUT.SCREEN.HEIGHT * 0.3,
		top: 0,
		width: "100%",
	},
	shrinked: {
		alignItems: "center",
		backgroundColor: COLORS.MAIN_BG,
		height: LAYOUT.SCREEN.HEIGHT * 0.06,
		width: "100%",
	},
});

export default styles;
