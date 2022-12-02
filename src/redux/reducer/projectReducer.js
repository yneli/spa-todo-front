const defaultState = {
    projects: null,
    title: null,
};

export const SET_PROJECT = "SET_PROJECT";
export const GET_PROJECT = "GET_PROJECT";
export const FETCH_PROJECT_CREATE = "FETCH_PROJECT_CREATE";
export const PROJECTS = "PROJECTS";
export const GET_TITLE = "GET_TITLE";
export const SET_TITLE = "SET_TITLE";


export default function projectReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_PROJECT:
            return {...state, projects: action.payload}
        case SET_TITLE:
            return {...state, title: action.payload}
    }
    return state
};
export const setProject = payload => ({type: SET_PROJECT, payload});
export const getAllProject = (obj) => ({type: GET_PROJECT, obj: obj});
export const fetchCreateProject = (obj) => ({type: FETCH_PROJECT_CREATE, obj: obj});
export const projects = (state = defaultState) => state.projectReducer.projects;
export const getProjectTitle = (obj) => ({type: GET_TITLE, obj: obj});
export const setTitle = payload => ({type: SET_TITLE, payload});