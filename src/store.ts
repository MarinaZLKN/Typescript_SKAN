import { createStore } from 'redux';
import authReducer, { AuthState } from './reducers/reduser'

export interface RootState {
  auth: AuthState;
}

const store = createStore(authReducer);

export default store;

// import { createStore } from 'redux';
// import authReducer from './reducers/reduser'
// import searchDataReducer from './reducers/searchReducer'
// import { combineReducers } from 'redux';
// import {RootState} from "./types";
//
//
// const rootReducer = combineReducers<RootState>({
//     auth: authReducer,
//     searchData: searchDataReducer
// });
//
// const store = createStore(rootReducer);
// export default store;
