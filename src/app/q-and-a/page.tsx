import styles from './q-and-a.module.css';

import Layout from '../components/Layout/Layout';
import QuestionItem from '../components/QuestionItem/QuestionItem';

export default function QuestionPage() {
    return (
        <Layout>
            <main className={styles.question}>
                <QuestionItem isTitle={true} title="Вопросы-ответы" />
                <QuestionItem
                    isTitle={false}
                    title="Что такое Билетопоиск?"
                    text="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
                />
                <QuestionItem isTitle={false} title="Какой компании принадлежит Билетопоиск?" />
                <QuestionItem isTitle={false} title="Как купить билет на Билетопоиск?" />
                <QuestionItem isTitle={false} title="Как оставить отзыв на Билетопоиск?" />
            </main>
        </Layout>
    );
}
