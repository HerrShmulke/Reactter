import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Input from '../components/Input';
import styles from '../styles/Login.module.css';
import Button from '../components/Button';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';

const LOGIN_MUTATION = gql`
  mutation login($loginInput: UserLoginInput!) {
    userLogin(input: $loginInput)
  }
`;

export default function Login() {
  const [login] = useMutation(LOGIN_MUTATION);
  const router = useRouter();
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
          <form
            className={styles.card}
            onSubmit={async (event) => {
              event.preventDefault();
              const loginFormData = new FormData(event.target);

              const username = loginFormData.get('username');
              const password = loginFormData.get('password');

              const authStatusData = await login({ variables: { loginInput: { name: username, password: password } } });

              if (authStatusData.data.userLogin) {
                router.push('/');
              }
            }}
          >
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
