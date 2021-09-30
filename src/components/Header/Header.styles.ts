import { StyleSheet } from "react-native";

import { Colors } from "styles";
import { Layout } from "constant";

const styles = StyleSheet.create({
	expanded: {
		width: "100%",
		height: Layout.screen.height * 0.3,
		alignItems: "center",
		backgroundColor: Colors.MainBG,
		top: 0,
	},
	shrinked: {
		alignItems: "center",
		width: "100%",
		height: Layout.screen.height * 0.06,
		backgroundColor: Colors.MainBG,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	about: {
		borderBottomWidth: 1,
		borderColor: Colors.White,
		margin: 5,
		padding: 2,
	},
});

export default styles;
