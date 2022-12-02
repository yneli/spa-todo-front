const defaultState = {
    projects: null,
    task: null,
};

export const SET_TASK = "SET_TASK";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const GET_TASK = "GET_TASK";
export const FETCH_TASK_CREATE = "FETCH_TASK_CREATE";


export default function taskReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_TASK:
            return {...state, projects: action.payload}
        case SET_TASK_NAME:
            return {...state, task: action.payload}
    };
   
    
    return state
};
export const setTask = payload => ({type: SET_TASK, payload});
export const setTaskName = payload => ({type: SET_TASK_NAME, payload})
export const getAllTask = (obj) => ({type: GET_TASK, obj: obj});
export const fetchCreateTask = (obj) => ({type: FETCH_TASK_CREATE, obj: obj});

