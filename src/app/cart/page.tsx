'use client';

import styles from './cart.module.css';

import React from 'react';

import Layout from '@/app/components/Layout/Layout';
import MoviesCartContainer from '../components/MoviesCartContainer/MoviesCartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { MovieInCartType } from '../types/types';
import { initCart } from '../redux/features/cart';
import { Roboto } from 'next/font/google';
import { RootState } from '../redux/services/store';

export const CartContext = React.createContext('');

const getCartFromLocalStorage = (): MovieInCartType[] => {
    if (typeof window !== 'undefined') {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }
    return [];
};

const robotoBold = Roboto({ weight: '700', subsets: ['latin', 'cyrillic'] });

export default function Movies() {
    const dispatch = useDispatch();

    const movies = useSelector((state: RootState) => state.cart.movies);

    const cartAmount = movies.map((item) => item.amount).reduce((acc, curr) => acc + curr, 0);

    React.useEffect(() => {
        dispatch(initCart(getCartFromLocalStorage()));
    }, [dispatch]);

    return (
        <Layout>
            <CartContext.Provider value="cart">
                <main className={styles.cart}>
                    <MoviesCartContainer />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: '1rem',
                            borderRadius: '8px',
                            padding: '1.5rem',
                            backgroundColor: '#fff',
                            width: '100%',
                            height: 'fit-content',
                        }}
                    >
                        <div
                            className={robotoBold.className}
                            style={{ fontSize: '1.25rem', lineHeight: '1.25rem' }}
                        >
                            Итого билетов:
                        </div>
                        <div
                            className={robotoBold.className}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            {cartAmount}
                        </div>
                    </div>
                </main>
            </CartContext.Provider>
        </Layout>
    );
}
