import { saveByKeyAndValue, retrieveByKey, deleteByKey } from "../store";

const refreshTokenName = "refresh_token";

const saveRefreshToken = async (token: string): Promise<void> => {
	await saveByKeyAndValue(refreshTokenName, token);
};

const getRefreshToken = async (): Promise<string | null> => {
	const s = await retrieveByKey(refreshTokenName);
	if (s === null) return null;
	return s.split(";")[0];
};

const deleteRefreshToken = async (): Promise<void> => {
	await deleteByKey(refreshTokenName);
};

export { saveRefreshToken, getRefreshToken, deleteRefreshToken };
