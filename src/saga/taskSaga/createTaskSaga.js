import axios from "../../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import { FETCH_TASK_CREATE, setTask } from "../../redux/reducer/taskReducer";

const createTask = (obj) => axios.post("/create/task", obj.obj)

function* createTaskWorker(obj) {
    try {
        const data = yield call(createTask, obj);
        yield put(setTask(data.data));
    } catch (error) {
        console.log(error);
    }
};
export function* createTaskWatcher() {
    yield takeEvery(FETCH_TASK_CREATE, createTaskWorker);
};

