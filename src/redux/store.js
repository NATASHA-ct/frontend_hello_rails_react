import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetReducer from './Greetings/Greeting';

const rootReducer = combineReducers({
  greetings: greetReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
