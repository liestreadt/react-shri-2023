'use client';

import styles from './movieCard.module.css';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

import { CartContext } from '@/app/cart/page';
import CartControls from '@/app/components/CartControls/CartControls';
import { GenresEnum, MovieType } from '@/app/types/types';
import { useDispatch } from 'react-redux';
import { openCartModal, removeMovieFromCart } from '@/app/redux/features/cart';

const robotoBold = Roboto({ weight: '700', subsets: ['latin', 'cyrillic'] });
const robotoItalic = Roboto({ weight: '500', style: 'italic', subsets: ['latin', 'cyrillic'] });

export default function MovieCard(props: { movie: MovieType }) {
    const context = React.useContext(CartContext);

    const dispatch = useDispatch();

    const handleRemoveFromCartBtnClick = () => {
        dispatch(openCartModal(props.movie.id));
    };

    return (
        <div className={styles.movieCard}>
            <div className={styles.cardImageContainer}>
                <Image
                    src={props.movie.posterUrl}
                    width={256}
                    height={384}
                    alt="Movie Image"
                    style={{ width: '100%', height: 'fit-content' }}
                />
            </div>
            <div className={styles.cardContentContainer}>
                <div className={styles.cardText}>
                    <Link
                        href={`/movie/${props.movie.id}`}
                        className={`${styles.cardTitle} ${robotoBold.className}`}
                    >
                        {props.movie.title}
                    </Link>
                    <div className={`${robotoItalic.className}`}>
                        {GenresEnum[props.movie.genre]}
                    </div>
                </div>
                <div className={styles.cardControls}>
                    <CartControls movie={props.movie} />
                    {context === 'cart' && (
                        <button
                            onClick={handleRemoveFromCartBtnClick}
                            className={styles.deleteFromCartBtn}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.25rem"
                                height="1.25rem"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M16.0673 15.1829C16.1254 15.241 16.1714 15.3099 16.2028 15.3858C16.2343 15.4617 16.2505 15.543 16.2505 15.6251C16.2505 15.7072 16.2343 15.7885 16.2028 15.8644C16.1714 15.9403 16.1254 16.0092 16.0673 16.0673C16.0092 16.1254 15.9403 16.1714 15.8644 16.2028C15.7885 16.2343 15.7072 16.2505 15.6251 16.2505C15.543 16.2505 15.4617 16.2343 15.3858 16.2028C15.3099 16.1714 15.241 16.1254 15.1829 16.0673L10.0001 10.8837L4.81729 16.0673C4.70002 16.1846 4.54096 16.2505 4.3751 16.2505C4.20925 16.2505 4.05019 16.1846 3.93292 16.0673C3.81564 15.95 3.74976 15.791 3.74976 15.6251C3.74976 15.4593 3.81564 15.3002 3.93292 15.1829L9.11651 10.0001L3.93292 4.81729C3.81564 4.70002 3.74976 4.54096 3.74976 4.3751C3.74976 4.20925 3.81564 4.05019 3.93292 3.93292C4.05019 3.81564 4.20925 3.74976 4.3751 3.74976C4.54096 3.74976 4.70002 3.81564 4.81729 3.93292L10.0001 9.11651L15.1829 3.93292C15.3002 3.81564 15.4593 3.74976 15.6251 3.74976C15.791 3.74976 15.95 3.81564 16.0673 3.93292C16.1846 4.05019 16.2505 4.20925 16.2505 4.3751C16.2505 4.54096 16.1846 4.70002 16.0673 4.81729L10.8837 10.0001L16.0673 15.1829Z"
                                    fill="#333333"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
