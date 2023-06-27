'use client';

import styles from './layout.module.css';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React from 'react';
import { MovieInCartType } from '@/app/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { initCart } from '@/app/redux/features/cart';
import { RootState } from '@/app/redux/services/store';
import LastItemModal from '../LastItemModal/LastItemModal';

export default function Layout({ children }: { children: React.ReactNode }) {
    const getCartFromLocalStorage = (): MovieInCartType[] => {
        if (typeof window !== 'undefined') {
            const cart = localStorage.getItem('cart');
            return cart ? JSON.parse(cart) : [];
        }
        return [];
    };

    const dispatch = useDispatch();

    const lastItemModalState = useSelector((state: RootState) => state.cart.showCartModal.status);

    React.useEffect(() => {
        dispatch(initCart(getCartFromLocalStorage()));
    }, [dispatch]);

    return (
        <>
            <div className={styles.pageContainer}>
                <Header />
                {children}
                {lastItemModalState && <LastItemModal />}
                <Footer />
            </div>
        </>
    );
}
