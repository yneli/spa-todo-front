import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./userReducer";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "../saga";
import  projectReducer  from "./projectReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    userReducer,
    projectReducer,
    
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
