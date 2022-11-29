import axios from "./../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_REGISTRATION, setUsers} from "../redux/userReducer";

const fetchRegisrtation = (obj) => console.log("hyt");;

function* fetchRegistrationWorker(obj) {
    const data = yield call(fetchRegisrtation(obj));
    yield put(setUsers(data));
};
export function* regWatcher() {
    yield takeEvery(FETCH_REGISTRATION, fetchRegistrationWorker);
};