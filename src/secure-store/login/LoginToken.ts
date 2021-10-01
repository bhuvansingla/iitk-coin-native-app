import { Save, Retrieve, Delete } from "../Store";

export const SaveToken = async (token: string) : Promise<void> => {
	await Save("token", token);
};

export const GetToken = async () : Promise<string | null> => {
	const s = await Retrieve("token");
	if(s === null) return null;
	return s.split(";")[0];
};


export const DeleteToken = async () :  Promise<void>=> {
	await Delete("token");
};
