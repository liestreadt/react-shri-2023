'use-client';

import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './moviesApi';

import cartReducer from '../features/cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
