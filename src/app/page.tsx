import styles from './page.module.css';

import FilterMenu from './components/FilterMenu/FilterMenu';
import Layout from './components/Layout/Layout';
import MainPageContainer from './components/MainPageContainer/MainPageContainer';

export default function MainPage() {
    return (
        <Layout>
            <main className={styles.mainPage}>
                <FilterMenu />
                <MainPageContainer />
            </main>
        </Layout>
    );
}
