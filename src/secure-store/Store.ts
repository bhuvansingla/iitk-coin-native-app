import * as SecureStore from "expo-secure-store";

export const Save = async (key:string, value:string) :  Promise<void> => {
	await SecureStore.setItemAsync(key, value);
};

export const Retrieve = async (key:string) : Promise<string | null>=> {
	const result = await SecureStore.getItemAsync(key);
	if (result) {
		return result;
	} else {
		console.error(`No value found for key: ${key}`);
		return null;
	}
};

export const Delete = async (key:string) : Promise<void> => {
	await SecureStore.deleteItemAsync(key);
};
