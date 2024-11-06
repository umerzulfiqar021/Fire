import { applyMiddleware, combineReducers,createStore } from "redux";
import userReducer from "./userReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
 import {persistStore,persistReducer} from 'redux-persist'
import { thunk } from "redux-thunk";

const persistConfig = {
    key: 'root',
   storage: AsyncStorage

}
const rootReducer = combineReducers({
    userData: persistReducer(persistConfig,userReducer)

})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType <typeof rootReducer>;
export const persistor = persistStore(store)
//this is for getting recommendations in the file we are using the data