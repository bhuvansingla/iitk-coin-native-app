import { saveByKeyAndValue, retrieveByKey, deleteByKey } from "../store";

const accessTokenName = "access_token";

const saveAccessToken = async (token: string): Promise<void> => {
	await saveByKeyAndValue(accessTokenName, token);
};

const getAccessToken = async (): Promise<string | null> => {
	const s = await retrieveByKey(accessTokenName);
	if (s === null) return null;
	return s.split(";")[0];
};

const deleteAccessToken = async (): Promise<void> => {
	await deleteByKey(accessTokenName);
};

export { saveAccessToken, getAccessToken, deleteAccessToken };
