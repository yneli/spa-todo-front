import axios from "./../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import { projects, setProject } from "../redux/projectReducer";
import { FETCH_PROJECT_CREATE } from "../redux/projectReducer";

const createProject = (obj) => axios.post("/create/project", obj.obj)

function* createProjectWorker(obj) {
    try {
        const data = yield call(createProject, obj);
        yield put(setProject(data.data));
    } catch (error) {
        console.log(error);
    }
};
export function* createProjectWatcher() {
    yield takeEvery(FETCH_PROJECT_CREATE, createProjectWorker);
};

