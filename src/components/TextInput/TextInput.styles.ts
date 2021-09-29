import { StyleSheet } from "react-native";
import { Colors, Font } from "styles";

export default StyleSheet.create({
	
	container: {
		marginTop: 5,
		marginHorizontal: 16,
		width:"100%",    
	},

	input: {
		marginTop:2,
		marginBottom: 20,
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderRadius: 20,
		backgroundColor: Colors.grey,

		fontFamily:Font.FontWeight.Bold,
		color:Colors.black,
		fontSize:Font.FontSize.H3,
		fontWeight:"600",

		shadowRadius:4,
		shadowColor:Colors.black,
		shadowOpacity:0.25,
		shadowOffset:{width:0, height:4},
    
	},

	containerTitle: {
		marginBottom: 7,
		flexDirection: "row",
	},

	fullWidth: {
		width: "100%",
		alignItems: "center",
		paddingHorizontal: 0,
	},
});
