import axios from "../../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import { GET_TASK, setTask, setTaskName } from "../../redux/reducer/taskReducer";

const getTask = (obj) => axios.post("/create/showtask", obj.obj)

function* getTaskWorker(obj) {
    try {
        const data = yield call(getTask, obj);
        yield put(setTask(data.data));
        yield put(setTaskName(data.data[0].project))
    } catch (error) {
        console.log(error);
    }
};
export function* getTaskWatcher() {
    yield takeEvery(GET_TASK, getTaskWorker);
};

