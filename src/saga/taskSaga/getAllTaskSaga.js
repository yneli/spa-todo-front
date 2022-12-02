import axios from "../../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import { GET_TASK, setTask } from "../../redux/reducer/taskReducer";

const getTask = (obj) => axios.post("/create/showtask", obj.obj)

function* getTaskWorker(obj) {
    try {
        const data = yield call(getTask, obj);
        yield put(setTask(data.data));
    } catch (error) {
        console.log(error);
    }
};
export function* getTaskWatcher() {
    yield takeEvery(GET_TASK, getTaskWorker);
};

