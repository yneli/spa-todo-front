import {all} from "redux-saga/effects";
import {userWatcher} from "./userSaga";
import {regWatcher} from "./registrationSaga";

export function* rootWatcher() {
    yield all([userWatcher(),regWatcher()])
};