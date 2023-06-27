import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MovieType, ReviewType } from '@/app/types/types';

const customFetch = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3001/api/movie?movieId=${id}`);
        if (!response.ok) {
            throw new Error('Error while loading movie');
        }
        return await response.json();
    } catch (err) {
        return err;
    }
};

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getMovies: builder.query<MovieType[], string>({
            query: () => 'movies',
        }),
        getMovieById: builder.query<MovieType, string>({
            query: (id) => `/movie?movieId=${id}`,
        }),
        getMovieReviewsById: builder.query<ReviewType[], string>({
            query: (id) => `/reviews?movieId=${id}`,
        }),
        getMoviesForCart: builder.query({
            queryFn: (ids) => {
                const promises = ids.map((id: string) => {
                    return customFetch(id);
                });
                return Promise.all(promises).then((results) => {
                    return { data: results };
                });
            },
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieByIdQuery,
    useGetMovieReviewsByIdQuery,
    useGetMoviesForCartQuery,
} = moviesApi;
