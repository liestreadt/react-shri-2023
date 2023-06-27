'use client';

import styles from './mainPageContainer.module.css';

import React from 'react';
import { useGetMoviesQuery } from '@/app/redux/services/moviesApi';

import MovieCard from '../MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/services/store';
import { MovieType } from '@/app/types/types';
import Loader from '../Loader/Loader';

export default function MainPageContainer() {
    const { data, error, isLoading } = useGetMoviesQuery('1');

    const genreFilter = useSelector((state: RootState) => state.cart.genreFilter);
    const titleFilter = useSelector((state: RootState) => state.cart.titleFilter);

    return isLoading ? (
        <Loader />
    ) : error ? (
        <div>Error</div>
    ) : (
        <div className={styles.moviesContainer}>
            {genreFilter === 'notPicked'
                ? data
                      ?.filter((item) =>
                          titleFilter !== ''
                              ? item.title.match(new RegExp(titleFilter, 'gi'))
                              : item
                      )
                      .map((movie: MovieType) => <MovieCard key={movie.id} movie={movie} />)
                : data
                      ?.filter((item) => item.genre === genreFilter)
                      ?.filter((item) =>
                          titleFilter !== ''
                              ? item.title.match(new RegExp(titleFilter, 'gi'))
                              : item
                      )
                      .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    );
}
