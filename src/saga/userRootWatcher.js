import {all} from "redux-saga/effects";
import {userWatcher} from "./userSaga/userSaga";
import {regWatcher} from "./userSaga/registrationSaga";
import {projectWatcher} from "./projectSaga/projectSaga";
import {createProjectWatcher} from "./projectSaga/createProjSaga";
import { createTaskWatcher } from "./taskSaga/createTaskSaga";

export function* userRootWatcher() {
    yield all([userWatcher(),regWatcher(),projectWatcher(),createProjectWatcher(),]);
};