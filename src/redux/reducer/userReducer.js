const defaultState = {
    users: null,
};

export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_REGISTRATION = "FETCH_REGISTRATION";

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
    }
    return state
};
export const setUsers = payload => ({type: SET_USERS, payload});
export const fetchUsers = () => ({type: FETCH_USERS});
export const fetchRegistraition = (obj) => ({type: FETCH_REGISTRATION, obj: obj});
export const selectIsAuth = (state = defaultState) => Boolean(state.userReducer.users);