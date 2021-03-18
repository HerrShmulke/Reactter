import Head from 'next/head';
import Header from '../components/Header';
import Container from '../components/Container';
import styles from '../styles/Login.module.css';
import LoginForm from '../forms/LoginForm';

export default function LoginContainer({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  
  let currentForm = <LoginForm onSubmit={onLogin} onFormReplace={setIsLogin(false)} />

  return (
    <>
      <Head>
        <title>Reactter авторизация</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Header />
        <div className={styles.cardContainer}>
          
        </div>
      </Container>
    </>
  );
}
