import { Save, Retrieve, Delete } from "../Store";

const keyName = "token";

const saveToken = async (token: string) : Promise<void> => {
	await Save(keyName, token);
};

const getToken = async () : Promise<string | null> => {
	const s = await Retrieve(keyName);
	if(s === null) return null;
	return s.split(";")[0];
};

const deleteToken = async () : Promise<void> => {
	await Delete(keyName);
};

export { saveToken, getToken, deleteToken };