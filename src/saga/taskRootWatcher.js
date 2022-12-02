import {all} from "redux-saga/effects";
import { fetchProjectInfoWatcher } from "./projectSaga/projectInfoSaga";
import { createTaskWatcher } from "./taskSaga/createTaskSaga";
import { getTaskWatcher } from "./taskSaga/getAllTaskSaga";


export function* taskRootWatcher() {
    yield all([createTaskWatcher(), getTaskWatcher(), fetchProjectInfoWatcher(),]);
};