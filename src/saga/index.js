import {all} from "redux-saga/effects";
import {userWatcher} from "./userSaga";
import {regWatcher} from "./registrationSaga";
import {projectWatcher} from "./projectSaga";
import {createProjectWatcher} from "./createProjSaga";

export function* rootWatcher() {
    yield all([userWatcher(),regWatcher(),projectWatcher(),createProjectWatcher()]);
};