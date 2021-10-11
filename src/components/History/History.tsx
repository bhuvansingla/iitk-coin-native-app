import React from "react";

import {HistoryList, NoHistory, Props} from "./HistoryList";

const History: React.FC<Props> = ({ history }: Props) => {
	if (history.length === 0) {
		return <NoHistory />;
	}
	return <HistoryList history={history} />;
};

export default History;
