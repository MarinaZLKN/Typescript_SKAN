import { createStore } from 'redux';
import authReducer, { AuthState } from './reducers/reduser'

export interface RootState {
  auth: AuthState;
}

const store = createStore(authReducer);

export default store;

