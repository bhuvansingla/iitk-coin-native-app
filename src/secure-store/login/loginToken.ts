import { saveByKeyAndValue, retrieveByKey, deleteByKey } from "../store";

const keyName = "token";

const saveToken = async (token: string): Promise<void> => {
	await saveByKeyAndValue(keyName, token);
};

const getToken = async (): Promise<string | null> => {
	const s = await retrieveByKey(keyName);
	if (s === null) return null;
	return s.split(";")[0];
};

const deleteToken = async (): Promise<void> => {
	await deleteByKey(keyName);
};

export { saveToken, getToken, deleteToken };
