import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import styles from '../styles/Login.module.css';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';

/**
 * @param {import('./LoginContainer').ILoginContainerProps} param0
 */
export default function LoginContainer({ onLogin, onRegister }) {
  const [isLogin, setIsLogin] = useState(true);

  let currentForm = <LoginForm onSubmit={onLogin} onFormReplace={() => setIsLogin(false)} />;
  if (!isLogin) currentForm = <RegisterForm onSubmit={onRegister} onFormReplace={() => setIsLogin(true)} />;

  return (
    <>
      <Head>
        <title>Reactter авторизация</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Header />
        <div className={styles.cardContainer}>{currentForm}</div>
      </Container>
    </>
  );
}
