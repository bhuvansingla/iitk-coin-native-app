import { StyleSheet } from "react-native";

import { Layout } from "constant";
import { Colors,Font } from "styles";

export default StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 10,
		
		width: "100%",
	},

	text: {
		marginBottom: 7,
		flexDirection: "row",
		opacity:1,
		color:Colors.black,
		fontSize:Font.FontSize.H2,
		textAlign:"left",
	},

	
});
