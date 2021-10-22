import { saveByKeyAndValue, retrieveByKey, deleteByKey } from "../store";

const keyName = "rollno";

const saveRollNo = async (token: string): Promise<void> => {
	await saveByKeyAndValue(keyName, token);
};

const getRollNo = async (): Promise<string | null> => {
	const s = await retrieveByKey(keyName);
	if (s === null) return null;
	return s;
};

const deleteRollNo = async (): Promise<void> => {
	await deleteByKey(keyName);
};

export { saveRollNo, getRollNo, deleteRollNo };
