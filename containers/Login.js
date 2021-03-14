import Head from 'next/head';
import { useRef, useState } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Input from '../components/Input';
import styles from '../styles/Login.module.css';
import Button from '../components/Button';

export default function LoginContainer({ onLogin }) {
  const formRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function submitForm() {
    const loginFormData = new FormData(formRef.current);

    const username = loginFormData.get('username');
    const password = loginFormData.get('password');

    onLogin(username, password);
  }

  return (
    <>
      <Head>
        <title>Reactter авторизация</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Header />
        <div className={styles.cardContainer}>
          <form
            className={styles.card}
            ref={formRef}
            onSubmit={(event) => {
              event.preventDefault();
              submitForm();
            }}
          >
            <Input
              label='Username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder='Введите имя'
              maxLength={5}
              name='username'
              onKeyPress={(event) => {
                if (event.key.toLowerCase() === 'enter') submitForm();
              }}
            />
            <Input
              label='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder='Введите пароль'
              type='password'
              name='password'
              onKeyPress={(event) => {
                if (event.key.toLowerCase() === 'enter') submitForm();
              }}
            />
            <div className={styles.actions}>
              <Button
                appearanceType='text'
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Вспомнить пароль
              </Button>
              <Button type='submit'>Войти</Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
