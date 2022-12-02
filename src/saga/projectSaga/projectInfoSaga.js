import axios from "../../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import { GET_TITLE, setTitle } from "../../redux/reducer/projectReducer";


const fetchProjectInfo = (obj) => axios.post('/projectinfo', obj.obj);

function* fetchProjectInfoWorker(obj) {
    try {
        const data = yield call(fetchProjectInfo, obj);
        yield put(setTitle(data.data[0]));
    } catch (error) {
        console.log(error);
    }
};
export function* fetchProjectInfoWatcher() {
    yield takeEvery(GET_TITLE, fetchProjectInfoWorker);
};

