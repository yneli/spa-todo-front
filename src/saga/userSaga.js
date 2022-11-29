import axios from "./../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_USERS, setUsers} from "../redux/userReducer";

const fetchUsersFromApi = () => axios.get('/auth/getme');

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi)
};
export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
};

