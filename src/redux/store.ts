import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./reducer/userReducer";
import createSagaMiddleware from 'redux-saga';
import { userRootWatcher } from "../saga/userRootWatcher";
import  projectReducer  from "./reducer/projectReducer";
import taskReducer from "./reducer/taskReducer";
import { taskRootWatcher } from "../saga/taskRootWatcher";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    userReducer,
    projectReducer,
    taskReducer,
    
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userRootWatcher);
sagaMiddleware.run(taskRootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
