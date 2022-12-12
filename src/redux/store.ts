import counter from './counter-slice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ counter })

export const store = configureStore({
    reducer: rootReducer
})