import axios from "./../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_USERS, setUsers} from "../redux/userReducer";

const fetchUsersFromApi = () => axios.get('/auth/getme');

function* fetchUserWorker() {
    try {
        const data = yield call(fetchUsersFromApi);
        yield put(setUsers(data.data))
    } catch (error) {
        console.log(error);
    }
};
export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
};

