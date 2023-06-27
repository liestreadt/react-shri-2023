export type MovieType = {
    description: string;
    director: string;
    genre: 'fantasy' | 'horror' | 'action' | 'comedy';
    id: string;
    posterUrl: string;
    rating: number;
    releaseYear: number;
    reviewIds: string[];
    title: string;
};

export type ReviewType = {
    id: string;
    name: string;
    rating: number;
    text: string;
};

export type MovieInCartType = { movie: MovieType; amount: number };

export type CartStateType = {
    movies: MovieInCartType[];
    genreFilter: GenresType;
    titleFilter: string;
    showCartModal: {
        id: string;
        status: boolean;
    };
};

export type GenresType = 'fantasy' | 'horror' | 'action' | 'comedy' | 'notPicked';

export enum GenresEnum {
    'fantasy' = 'Фэнтези',
    'horror' = 'Ужасы',
    'action' = 'Боевик',
    'comedy' = 'Комедия',
    'notPicked' = 'Не выбран',
}
