import * as SecureStore from "expo-secure-store";

export const saveByKeyAndValue = async (key: string, value: string): Promise<void> => {
	await SecureStore.setItemAsync(key, value);
};

export const retrieveByKey = async (key: string): Promise<string | null> => {
	const result = await SecureStore.getItemAsync(key);
	if (result) {
		return result;
	} else {
		return null;
	}
};

export const deleteByKey = async (key: string): Promise<void> => {
	await SecureStore.deleteItemAsync(key);
};
