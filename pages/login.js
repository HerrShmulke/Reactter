import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Input from '../components/Input';
import styles from '../styles/Login.module.css';
import Button from '../components/Button';
import { login } from '../lib/api';

/**
 * @param {import('react').FormEvent<HTMLFormElement>} event
 */
function loginOnSubmit(event) {
  event.preventDefault();
  const loginFormData = new FormData(event.target);

  const username = loginFormData.get('username');
  const password = loginFormData.get('password');

  login(username, password);
}

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Head>
        <title>Reactter авторизация</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Header />
        <div className={styles.cardContainer}>
          <form className={styles.card} onSubmit={loginOnSubmit}>
            <Input
              label='Username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder='Введите имя'
              maxLength={5}
              name='username'
            />
            <Input
              label='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder='Введите пароль'
              type='password'
              name='password'
            />
            <div className={styles.actions}>
              <Button appearanceType='text'>Вспомнить пароль</Button>
              <Button type='submit'>Войти</Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
