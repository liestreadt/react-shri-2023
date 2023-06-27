'use client';

import { CartStateType, GenresType, MovieInCartType, MovieType } from '@/app/types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
const initialState: CartStateType = {
    movies: [],
    genreFilter: 'notPicked',
    titleFilter: '',
    showCartModal: {
        id: '',
        status: false,
    },
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        initCart: (state, action: PayloadAction<MovieInCartType[]>) => {
            state.movies = action.payload;
        },
        incrementMovieAmount: (state, action: PayloadAction<MovieType>) => {
            const movieInCart = state.movies.find((item) => item.movie.id === action.payload.id);
            if (movieInCart) {
                movieInCart.amount += 1;
            } else {
                state.movies = state.movies.concat({ movie: action.payload, amount: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.movies));
        },
        decrementMovieAmount: (state, action: PayloadAction<MovieType>) => {
            const movieInCart = state.movies.find((item) => item.movie.id === action.payload.id);
            if (movieInCart) {
                if (movieInCart.amount === 1) {
                    state.showCartModal.status = true;
                    state.showCartModal.id = action.payload.id;
                    // state.movies = state.movies.filter((item) => {
                    //     return item.movie.id !== action.payload.id;
                    // });
                } else {
                    movieInCart.amount -= 1;
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.movies));
        },
        removeMovieFromCart: (state, action: PayloadAction<string>) => {
            state.movies = state.movies.filter((item) => item.movie.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.movies));
        },
        changeGenreFilter: (state, action: PayloadAction<GenresType>) => {
            state.genreFilter = action.payload;
        },
        changeTitleFilter: (state, action: PayloadAction<string>) => {
            state.titleFilter = action.payload;
        },
        closeCartModal: (state) => {
            state.showCartModal.status = false;
        },
        openCartModal: (state, action: PayloadAction<string>) => {
            state.showCartModal.id = action.payload;
            state.showCartModal.status = true;
        },
    },
});

export const {
    incrementMovieAmount,
    decrementMovieAmount,
    removeMovieFromCart,
    initCart,
    changeGenreFilter,
    changeTitleFilter,
    closeCartModal,
    openCartModal,
} = cartSlice.actions;

export default cartSlice.reducer;
