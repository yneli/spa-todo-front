import axios from "./../axios";
import {put, takeEvery, call} from "redux-saga/effects"
import { setProject } from "../redux/projectReducer";
import { GET_PROJECT } from "../redux/projectReducer";

const fetchProjects = (obj) => axios.get('/myproject');

function* fetchProjectsWorker(obj) {
    try {
        const data = yield call(fetchProjects, obj);
        yield put(setProject(data.data));
    } catch (error) {
        console.log(error);
    }
};
export function* projectWatcher() {
    yield takeEvery(GET_PROJECT, fetchProjectsWorker);
};

