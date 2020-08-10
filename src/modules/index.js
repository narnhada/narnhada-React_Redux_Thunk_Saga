import { combineReducers } from "redux";

import counter from "./counter";
import posts, { postsSaga } from "./posts";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ counter, posts });

// 사가 추가
export function* rootSaga() {
  yield all([postsSaga()]);
}

export default rootReducer;
