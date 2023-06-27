import styles from './filterMenu.module.css';

import { Roboto } from 'next/font/google';

import FilterBar from './FilterBar';

const roboto = Roboto({ weight: '500', subsets: ['latin', 'cyrillic'] });

export default function FilterMenu() {
    return (
        <div className={styles.filterMenu}>
            <div className={roboto.className} style={{ marginBottom: '0.25rem' }}>
                Фильтр поиска
            </div>
            <FilterBar
                inputPlaceholder="Введите название"
                filterTitle="Название"
                isPoppable={false}
                filterCategory="none"
                isCinema={false}
            />
            <FilterBar
                inputPlaceholder="Выберите жанр"
                filterTitle="Жанр"
                isPoppable={true}
                filterCategory="genre"
                isCinema={false}
            />
            <FilterBar
                inputPlaceholder="Выберите кинотеатр"
                filterTitle="Кинотеатр"
                isPoppable={true}
                filterCategory="cinema"
                isCinema={true}
            />
        </div>
    );
}
