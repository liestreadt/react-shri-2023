'use client';

import { ChangeEvent, FocusEvent } from 'react';
import styles from './filterMenu.module.css';

import { Roboto } from 'next/font/google';
import React from 'react';
import FilterPopup from './FilterPopup';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitleFilter } from '@/app/redux/features/cart';
import { RootState } from '@/app/redux/services/store';
import { GenresEnum } from '@/app/types/types';

type FilterBarPropsType = {
    isPoppable: boolean;
    filterTitle: string;
    inputPlaceholder: string;
    filterCategory: string;
    isCinema: boolean;
};

const robotoRegular = Roboto({ weight: '400', subsets: ['latin', 'cyrillic'] });

export default function FilterBar({
    isPoppable,
    filterTitle,
    inputPlaceholder,
    filterCategory,
    isCinema,
}: FilterBarPropsType) {
    const inputFieldRef = React.useRef<HTMLInputElement | null>(null);
    const inputIconRef = React.useRef<HTMLDivElement | null>(null);
    const popupRef = React.useRef<HTMLDivElement | null>(null);

    const dispatch = useDispatch();

    const filterName = useSelector((state: RootState) => state.cart.genreFilter);

    const handleInputFocus = (event: FocusEvent) => {
        event.stopPropagation();
        const input = event.target as HTMLInputElement;
        const container = event.target.closest('div');
        container?.classList.add(styles.inputContainerFocus);
        if (inputIconRef.current) {
            inputIconRef.current.innerHTML = `<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.25rem"
                                                height="1.25rem"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <g id="20px/arrow-square-up">
                                                    <path
                                                        id="icon"
                                                        d="M7.50008 18.9583H12.5001C17.0251 18.9583 18.9584 17.025 18.9584 12.5V7.49996C18.9584 2.97496 17.0251 1.04163 12.5001 1.04163H7.50008C2.97508 1.04163 1.04175 2.97496 1.04175 7.49996V12.5C1.04175 17.025 2.97508 18.9583 7.50008 18.9583ZM2.29175 7.49996C2.29175 3.65829 3.65841 2.29163 7.50008 2.29163H12.5001C16.3417 2.29163 17.7084 3.65829 17.7084 7.49996V12.5C17.7084 16.3416 16.3417 17.7083 12.5001 17.7083H7.50008C3.65841 17.7083 2.29175 16.3416 2.29175 12.5V7.49996ZM12.5001 11.6583C12.6251 11.7833 12.7834 11.8417 12.9418 11.8417C13.1001 11.8417 13.2584 11.7833 13.3834 11.6583C13.6251 11.4167 13.6251 11.0167 13.3834 10.775L10.4418 7.83335C10.2001 7.59168 9.80009 7.59168 9.55842 7.83335L6.61675 10.775C6.37508 11.0167 6.37508 11.4167 6.61675 11.6583C6.85842 11.9 7.25842 11.9 7.50008 11.6583L10.0001 9.15835L12.5001 11.6583Z"
                                                        fill="#999FA6"
                                                    />
                                                </g>
                                            </svg>`;
        }

        if (input.hasAttribute('data-custom') && popupRef.current) {
            popupRef.current.style.display = 'flex';
        }
    };

    const handleInputBlur = (event: FocusEvent) => {
        const container = event.target.closest('div');
        container?.classList.remove(styles.inputContainerFocus);
        if (inputIconRef.current) {
            inputIconRef.current.innerHTML = `<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <g id="20px/arrow-square-down">
                                                    <path
                                                        id="icon"
                                                        d="M7.50008 18.9583H12.5001C17.0251 18.9583 18.9584 17.025 18.9584 12.5V7.49996C18.9584 2.97496 17.0251 1.04163 12.5001 1.04163H7.50008C2.97508 1.04163 1.04175 2.97496 1.04175 7.49996V12.5C1.04175 17.025 2.97508 18.9583 7.50008 18.9583ZM2.29175 7.49996C2.29175 3.65829 3.65841 2.29163 7.50008 2.29163H12.5001C16.3417 2.29163 17.7084 3.65829 17.7084 7.49996V12.5C17.7084 16.3416 16.3417 17.7083 12.5001 17.7083H7.50008C3.65841 17.7083 2.29175 16.3416 2.29175 12.5V7.49996ZM9.55842 12.2417C9.68342 12.3667 9.84175 12.4251 10.0001 12.4251C10.1584 12.4251 10.3168 12.3667 10.4418 12.2417L13.3834 9.30006C13.6251 9.05839 13.6251 8.65839 13.3834 8.41672C13.1418 8.17506 12.7418 8.17506 12.5001 8.41672L10.0001 10.9167L7.50008 8.41672C7.25842 8.17506 6.85842 8.17506 6.61675 8.41672C6.37508 8.65839 6.37508 9.05839 6.61675 9.30006L9.55842 12.2417Z"
                                                        fill="#999FA6"
                                                    />
                                                </g>
                                            </svg>`;
        }
    };

    const handleTitleFilterChange = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        dispatch(changeTitleFilter(target.value));
    };

    return (
        <div className={`${styles.filtersContainer} ${robotoRegular.className}`}>
            <div className={styles.filterTitle}>{filterTitle}</div>
            <div className={styles.inputContainer}>
                {isPoppable ? (
                    !isCinema ? (
                        <input
                            className={`${styles.filtersContainerInput} ${styles.inputContainerPopup}`}
                            placeholder={inputPlaceholder}
                            data-custom
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            ref={inputFieldRef}
                            defaultValue={GenresEnum[filterName]}
                        />
                    ) : (
                        <input
                            className={`${styles.filtersContainerInput} ${styles.inputContainerPopup}`}
                            placeholder={inputPlaceholder}
                            data-custom
                        />
                    )
                ) : (
                    <input
                        className={styles.filtersContainerInput}
                        placeholder={inputPlaceholder}
                        type="text"
                        onChange={handleTitleFilterChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        ref={inputFieldRef}
                    />
                )}
                {isPoppable && (
                    <div ref={inputIconRef} className={styles.inputIcon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <g id="20px/arrow-square-down">
                                <path
                                    id="icon"
                                    d="M7.50008 18.9583H12.5001C17.0251 18.9583 18.9584 17.025 18.9584 12.5V7.49996C18.9584 2.97496 17.0251 1.04163 12.5001 1.04163H7.50008C2.97508 1.04163 1.04175 2.97496 1.04175 7.49996V12.5C1.04175 17.025 2.97508 18.9583 7.50008 18.9583ZM2.29175 7.49996C2.29175 3.65829 3.65841 2.29163 7.50008 2.29163H12.5001C16.3417 2.29163 17.7084 3.65829 17.7084 7.49996V12.5C17.7084 16.3416 16.3417 17.7083 12.5001 17.7083H7.50008C3.65841 17.7083 2.29175 16.3416 2.29175 12.5V7.49996ZM9.55842 12.2417C9.68342 12.3667 9.84175 12.4251 10.0001 12.4251C10.1584 12.4251 10.3168 12.3667 10.4418 12.2417L13.3834 9.30006C13.6251 9.05839 13.6251 8.65839 13.3834 8.41672C13.1418 8.17506 12.7418 8.17506 12.5001 8.41672L10.0001 10.9167L7.50008 8.41672C7.25842 8.17506 6.85842 8.17506 6.61675 8.41672C6.37508 8.65839 6.37508 9.05839 6.61675 9.30006L9.55842 12.2417Z"
                                    fill="#999FA6"
                                />
                            </g>
                        </svg>
                    </div>
                )}
                <div style={{ width: 'fit-content' }}>
                    <FilterPopup
                        filterCategory={filterCategory}
                        inputFieldRef={inputFieldRef}
                        refPath={popupRef}
                    />
                </div>
            </div>
        </div>
    );
}
