import styles from './cartButton.module.css';

import { useDispatch } from 'react-redux';

import { incrementMovieAmount, decrementMovieAmount } from '@/app/redux/features/cart';
import { MovieType } from '@/app/types/types';

type CardButtonPropsType = {
    type: 'increment' | 'decrement';
    isActive: boolean;
    movie: MovieType;
};

export default function CartButton({ type, isActive, movie }: CardButtonPropsType) {
    const dispatch = useDispatch();

    const handleAmountChange = () => {
        if (type === 'increment') {
            dispatch(incrementMovieAmount(movie));
        }
        if (type === 'decrement') {
            dispatch(decrementMovieAmount(movie));
        }
    };

    return (
        <button
            onClick={handleAmountChange}
            className={styles.cardControlsCartBtn}
            disabled={!isActive}
        >
            {type === 'increment' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.75rem"
                    height="0.75rem"
                    viewBox="0 0 32 32"
                    fill="none"
                >
                    <path
                        d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H17V27C17 27.2652 16.8946 27.5196 16.7071 27.7071C16.5196 27.8946 16.2652 28 16 28C15.7348 28 15.4804 27.8946 15.2929 27.7071C15.1054 27.5196 15 27.2652 15 27V17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H15V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16Z"
                        fill="#333333"
                    />
                </svg>
            )}
            {type === 'decrement' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.75rem"
                    height="0.75rem"
                    viewBox="0 0 32 32"
                    fill="none"
                >
                    <path
                        d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16Z"
                        fill="#333333"
                    />
                </svg>
            )}
        </button>
    );
}
