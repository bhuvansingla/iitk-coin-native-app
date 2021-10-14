import { StyleSheet } from "react-native";

import { FONT } from "styles";

const styles = StyleSheet.create({
	amountTaxContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	container: {
		alignItems: "flex-start",
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	halfBox: {
		flexDirection: "column",
		justifyContent: "flex-start",
		width: "50%",
	},
	label: {
		fontSize: FONT.SIZE.SECONDARY,
		opacity: 0.7,
		paddingBottom: 5,
	},
	listItem: {
		alignItems: "flex-start",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	value: {
		fontSize: FONT.SIZE.H2,
		opacity: 0.9,
	},
	wrapper: {
		fontFamily: FONT.WEIGHT.BOLD,
		fontSize: FONT.SIZE.TERTIARY,
		marginBottom: 15,
		opacity: 0.7,
	},
});

export default styles;
