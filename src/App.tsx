
import { registerRootComponent } from "expo";
import React,{useCallback,useState} from "react";
import { StyleSheet, View } from "react-native";
import Txt from "components/Text";
import { Header,TextInput, Footer } from "components";
import { Colors } from "styles";
import Buttons from "components/Buttons";


function App() {

	const [Name, setName] = useState<string>("");
	const [Roll, setRoll] = useState<string>("");
	const onChangeName = useCallback((name: string) => {
		if (name.length < 50) {
			setName(name);
		}    
	}, []);
	const onChangeRoll = useCallback((name: string) => {
		if (name.length < 50) {
			setRoll(name);
		}    
	}, []);

	{
		return (
			<View style={styles.container}>
				<Txt.title>IIT KANPUR</Txt.title>
				<Header title ="CREATE A WALLET"/>
				<TextInput
					placeholder="Enter roll no. here"
					title="IITK Roll No."
					onChangeText={onChangeRoll}
					value={Roll}
				/>
				<TextInput
					placeholder="Enter Name"
					title="Name"
					onChangeText={onChangeName}
					value={Name}
				/>
				<Buttons title="Sign in" onPress={()=>{}}/>

				<Footer
					onPress={() => {}}
					title="Don't have a wallet? "
					titlebold="Create now"
				/>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:" #000",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default registerRootComponent(App);
