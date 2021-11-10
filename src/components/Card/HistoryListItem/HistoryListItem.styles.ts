import { StyleSheet } from "react-native";

import { COLORS } from "styles";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		height: "100%",
		
		justifyContent: "flex-start",
		position: "relative",
		width: "115%",
		zIndex: 2,
	},
	content: {
		zIndex: -1,
	},
	detailsContainer: {
		backgroundColor: COLORS.GREY,
		borderRadius: 2,
		margin: 0,

		overflow: "hidden",
		paddingBottom: 8,
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 8,
		width: "100%",
	},
	footer: {
		marginTop:62,
		position: "absolute",
	},
	left: {
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 25,
		zIndex: 1,
	},
	mainContainer: {
		flex: 0,
		paddingVertical: 0,
		width: "100%",
	},
	right: {
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingRight: 25,
	},
	ripple: {
		alignItems: "center",
		backgroundColor: COLORS.WHITE,	
		borderRadius: 2,
		flex: 1,
		flexDirection: "column",
		marginBottom: 0,
		maxHeight: 150,
		minHeight: 70,
		width: "100%",
	},
	rippleWrapper: {
		maxHeight: 165,
		minHeight: 85,
		width: "100%",
	},
	text: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
		opacity: 1,
	},
});
export default styles;
