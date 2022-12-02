import axios from "../../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_REGISTRATION, setUsers} from "../../redux/reducer/userReducer";

const fetchRegisrtation = async (obj) => {
    let data = await axios.post("/auth/register", obj.obj);
    return data
}

function* fetchRegistrationWorker(obj) {
    try {
        const data = yield call(fetchRegisrtation, obj);
        yield put(setUsers(data.data));
    } catch (error) {
        console.log(error);
    }
};
export function* regWatcher() {
    yield takeEvery(FETCH_REGISTRATION, fetchRegistrationWorker);
};