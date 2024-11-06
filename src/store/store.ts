import { combineReducers,createStore } from "redux";

const initialState = {
    isSignedIn : true,
    userName : 'Umer-Zulfiqar'
}

const rootReducer = combineReducers({
    userData: () => initialState

})
export const store = createStore(rootReducer)