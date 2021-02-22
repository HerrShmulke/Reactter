import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import SubmitReactt from '../components/SubmitReactt';
import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reactter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Header />
        <SubmitReactt />
      </Container>
    </div>
  );
}
