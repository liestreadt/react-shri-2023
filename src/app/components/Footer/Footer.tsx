import Link from 'next/link';
import styles from './footer.module.css';

import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin', 'cyrillic'] });

export default function Footer() {
    return (
        <footer className={`${styles.footerContainer} ${roboto.className}`}>
            <Link href="/q-and-a">Вопросы-ответы</Link>
            <Link href="about">О нас</Link>
        </footer>
    );
}
