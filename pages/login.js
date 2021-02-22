import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Input from '../components/Input';
import styles from '../styles/Login.module.css';
import Button from '../components/Button';

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
          <div className={styles.card}>
            <Input label='Username' value={username} setValue={setUsername} placeholder='Введите имя' maxLength={5} />
            <Input label='Password' value={password} setValue={setPassword} placeholder='Введите пароль' password />
            <div className={styles.actions}>
              <Button type='text'>Вспомнить пароль</Button>
              <Button>Войти</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
