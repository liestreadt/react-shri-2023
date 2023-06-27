import styles from './moviesPageContainer.module.css';

import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const robotoBold = Roboto({ weight: '700', subsets: ['latin', 'cyrillic'] });
const robotoRegular = Roboto({ weight: '400', subsets: ['latin', 'cyrillic'] });

import { useGetMovieByIdQuery } from '@/app/redux/services/moviesApi';

import { GenresEnum } from '@/app/types/types';

import CartControls from '../CartControls/CartControls';
import Loader from '../Loader/Loader';

export default function MoviesPageContainer(props: { id: string }) {
    const { data, error, isLoading } = useGetMovieByIdQuery(props.id);

    return isLoading ? (
        <Loader />
    ) : error ? (
        <div>Error on server</div>
    ) : !data ? (
        <div>No data from server</div>
    ) : (
        <div className={styles.moviePageContainer}>
            <div className={styles.moviePageImageContainer}>
                <Image
                    src={data.posterUrl}
                    width={256}
                    height={384}
                    style={{ width: '100%', height: 'fit-content', borderRadius: '8px' }}
                    alt="Movie Image"
                />
            </div>
            <div className={styles.moviePageInfoContainer}>
                <div className={styles.titleLine}>
                    <div className={`${robotoBold.className}`} style={{ lineHeight: '2rem' }}>
                        {data.title}
                    </div>
                    <CartControls movie={data} />
                </div>
                <div className={`${styles.infoLines} ${styles.biggerText}`}>
                    <div>
                        <span className={robotoBold.className}>Жанр: </span>
                        <span className={robotoRegular.className}>{GenresEnum[data.genre]}</span>
                    </div>
                    <div>
                        <span className={robotoBold.className}>Год выпуска: </span>
                        <span className={robotoRegular.className}>{data.releaseYear}</span>
                    </div>
                    <div>
                        <span className={robotoBold.className}>Рейтинг: </span>
                        <span className={robotoRegular.className}>{data.rating}</span>
                    </div>
                    <div>
                        <span className={robotoBold.className}>Режиссер: </span>
                        <span className={robotoRegular.className}>{data.director}</span>
                    </div>
                </div>
                <div
                    className={`${robotoBold.className} ${styles.biggerText}`}
                    style={{ lineHeight: '2rem' }}
                >
                    Описание
                </div>
                <div className={`${robotoRegular.className} ${styles.message}`}>
                    {data.description}
                </div>
            </div>
        </div>
    );
}
