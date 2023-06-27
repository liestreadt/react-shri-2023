'use client';

import styles from './movie.module.css';

import React from 'react';

import Layout from '@/app/components/Layout/Layout';
import MoviesPageContainer from '@/app/components/MoviesPageContainer/MoviesPageContainer';
import MoviesPageReviewContainer from '@/app/components/MoviesPageReviewContainer/MoviesPageReviewContainer';

type MovieProps = {
    params: {
        id: string;
    };
};

export default function Movie({ params }: MovieProps) {
    return (
        <Layout>
            <main className={styles.movie}>
                <MoviesPageContainer id={params.id} />
                <MoviesPageReviewContainer id={params.id} />
            </main>
        </Layout>
    );
}
