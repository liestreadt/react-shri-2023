import { GenresEnum } from '@/app/types/types';
import styles from './filterMenu.module.css';

import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { changeGenreFilter } from '@/app/redux/features/cart';

export default function FilterPopup({
    refPath,
    inputFieldRef,
    filterCategory,
}: {
    refPath: React.MutableRefObject<HTMLDivElement | null>;
    inputFieldRef: React.MutableRefObject<HTMLInputElement | null>;
    filterCategory: string;
}) {
    const dispatch = useDispatch();

    const handleCategoryPicked = (event: MouseEvent) => {
        event.stopPropagation();
        const target = event.target as HTMLDivElement;
        if (inputFieldRef.current) {
            if (target.innerText === GenresEnum.action) dispatch(changeGenreFilter('action'));
            if (target.innerText === GenresEnum.comedy) dispatch(changeGenreFilter('comedy'));
            if (target.innerText === GenresEnum.horror) dispatch(changeGenreFilter('horror'));
            if (target.innerText === GenresEnum.fantasy) dispatch(changeGenreFilter('fantasy'));
            if (target.innerText === GenresEnum.notPicked) dispatch(changeGenreFilter('notPicked'));

            inputFieldRef.current.value = target.innerText;
            inputFieldRef.current.placeholder = '';
        }
        if (refPath.current) {
            refPath.current.style.display = 'none';
        }
    };

    return (
        filterCategory === 'genre' && (
            <div className={styles.popup} ref={refPath}>
                <div onClick={handleCategoryPicked} className={styles.popupItem}>
                    {GenresEnum.notPicked}
                </div>
                <div onClick={handleCategoryPicked} className={styles.popupItem}>
                    {GenresEnum.action}
                </div>
                <div onClick={handleCategoryPicked} className={styles.popupItem}>
                    {GenresEnum.comedy}
                </div>
                <div onClick={handleCategoryPicked} className={styles.popupItem}>
                    {GenresEnum.fantasy}
                </div>
                <div onClick={handleCategoryPicked} className={styles.popupItem}>
                    {GenresEnum.horror}
                </div>
            </div>
        )
    );
}
