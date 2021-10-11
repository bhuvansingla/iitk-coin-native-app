import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

import rootReducer from "redux-store/reducers";

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
