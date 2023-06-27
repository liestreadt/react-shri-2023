'use client';

import styles from './moviesCartContainer.module.css';

import React from 'react';
import { useSelector } from 'react-redux';

import { GenresEnum, MovieType } from '@/app/types/types';

import MovieCard from '../MovieCard/MovieCard';
import { useGetMoviesForCartQuery } from '@/app/redux/services/moviesApi';
import { RootState } from '@/app/redux/services/store';

export default function MoviesCartContainer() {
    // const state = useSelector((state: RootState) => state.cart.movies);
    // const moviesIds = state.map((item) => item.id);

    // const { data, error, isLoading } = useGetMoviesForCartQuery(moviesIds);

    const state = useSelector((state: RootState) => state.cart.movies);

    // return isLoading ? (
    //     <div>Loading</div>
    // ) : error ? (
    //     <div>Error</div>
    // ) : !data ? (
    //     <div>No data</div>
    // ) : (

    return (
        <div className={styles.movieContainer}>
            {state.map((item) => (
                <MovieCard key={item.movie.id} movie={item.movie} />
            ))}
        </div>
    );
    // );
}
