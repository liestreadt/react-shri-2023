import Layout from '../components/Layout/Layout';

import { Roboto } from 'next/font/google';

const robotoBold = Roboto({ weight: '700', subsets: ['latin', 'cyrillic'] });
const robotoRegular = Roboto({ weight: '400', subsets: ['latin', 'cyrillic'] });

export default function About() {
    return (
        <Layout>
            <main style={{ display: 'flex', padding: '1.5rem 2rem' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
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
                        style={{ fontSize: '2rem', lineHeight: '2rem' }}
                    >
                        О нас
                    </div>
                    <div className={robotoRegular.className} style={{ lineHeight: '1.5rem' }}>
                        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы
                        и сериалы, купить билеты в кино, узнать рейтинги популярных видео и
                        интересные факты, поставить фильмам оценки, написать рецензии и дополнить
                        описание фильмов.
                    </div>
                    <div className={robotoRegular.className} style={{ lineHeight: '1.5rem' }}>
                        был запущен в 2003 году. Портал предоставляет пользователям информацию о
                        фильмах и их создателях, новости кино, интервью с актерами и другими
                        знаменитостями, рецензии пользователей, расписание сеансов в кинотеатрах,
                        ТВ-программу и другие разделы.
                    </div>
                    <div className={robotoRegular.className} style={{ lineHeight: '1.5rem' }}>
                        Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий
                        Суханов. Владельцем проекта являлась компания ООО «Билетопоиск», которой
                        принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу —
                        французской компании ООО AlloCiné. 15 октября 2013 года сервис купила
                        компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то
                        время).
                    </div>
                </div>
            </main>
        </Layout>
    );
}
