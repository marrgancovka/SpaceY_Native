import { configureStore } from '@reduxjs/toolkit';
import { shipReducer } from './shipSlice';

export const store = configureStore({ reducer: { ship: shipReducer } });