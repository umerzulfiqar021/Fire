import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
























// this was only by using redux only 


// import { applyMiddleware, combineReducers,createStore } from "redux";
// import userReducer from "./userReducer";
// import AsyncStorage from '@react-native-async-storage/async-storage';
//  import {persistStore,persistReducer} from 'redux-persist'
// import { thunk } from "redux-thunk";

// const persistConfig = {
//     key: 'root',
//    storage: AsyncStorage

// }
// const rootReducer = combineReducers({
//     userData: persistReducer(persistConfig,userReducer)

// })
// export const store = createStore(rootReducer, applyMiddleware(thunk))
// export type RootState = ReturnType <typeof rootReducer>;
// export const persistor = persistStore(store)
//this is for getting recommendations in the file we are using the data