import {all} from "redux-saga/effects";
import {userWatcher} from "./userSaga";
import {regWatcher} from "./registrationSaga";
import {projectWatcher} from "./projectSaga";

export function* rootWatcher() {
    yield all([userWatcher(),regWatcher(),projectWatcher()]);
};