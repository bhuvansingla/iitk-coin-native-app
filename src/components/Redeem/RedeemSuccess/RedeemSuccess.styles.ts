import { StyleSheet } from "react-native";

import { FONT } from "styles";

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		maxHeight: "50%",
		paddingTop: 44,
	},
	title: {
		fontFamily: FONT.WEIGHT.SEMI_BOLD,
		fontSize: FONT.SIZE.H2,
		marginBottom: 5,
		marginTop: 15,
		opacity: 1,
	},
	txnID: {
		fontFamily: FONT.WEIGHT.REGULAR,
		fontSize: FONT.SIZE.TERTIARY,
		marginBottom: 30,
		opacity: 0.8,
	},
});

export default styles;
