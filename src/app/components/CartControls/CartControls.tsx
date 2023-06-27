import styles from './cartControls.module.css';

import { Roboto } from 'next/font/google';

import { useSelector } from 'react-redux';
import CartButton from '@/app/components/CartButton/CartButton';
import { RootState } from '@/app/redux/services/store';
import { MovieType } from '@/app/types/types';

const robotoBold = Roboto({ weight: '700', subsets: ['latin', 'cyrillic'] });

export default function CartControls({ movie }: { movie: MovieType }) {
    const state = useSelector((state: RootState) => state.cart.movies);

    const movieInCart = state?.find((item) => item.movie.id === movie.id);

    return (
        <div className={styles.cardControlsCart}>
            <CartButton movie={movie} isActive={movieInCart ? true : false} type="decrement" />
            <div className={`${styles.cardControlsAmount} ${robotoBold.className}`}>
                {movieInCart?.amount || 0}
            </div>
            <CartButton
                movie={movie}
                isActive={movieInCart?.amount === 30 ? false : true}
                type="increment"
            />
        </div>
    );
}
