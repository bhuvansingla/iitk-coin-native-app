import { history } from "api";
import { getToken } from "secure-store";

export const getHistory = async (rollno: string): Promise<history.TransactionHistory[]> => {
	const token = await getToken();
	if(token) {
		const res = await history.getTransactionHistory({ RollNo: rollno }, token);
		if(res.Status == 200){
			return res.Payload;
		}
	}
	return [];
};
