import {all} from "redux-saga/effects";
import { createTaskWatcher } from "./taskSaga/createTaskSaga";
import { getTaskWatcher } from "./taskSaga/getAllTaskSaga";


export function* taskRootWatcher() {
    yield all([createTaskWatcher(), getTaskWatcher()]);
};