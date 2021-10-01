import { Save, Retrieve, Delete } from "../Store";

const keyName = "token";

export const saveToken = async (token: string) : Promise<void> => {
	await Save(keyName, token);
};

export const getToken = async () : Promise<string | null> => {
	const s = await Retrieve(keyName);
	if(s === null) return null;
	return s.split(";")[0];
};

export const deleteToken = async () : Promise<void> => {
	await Delete(keyName);
};
