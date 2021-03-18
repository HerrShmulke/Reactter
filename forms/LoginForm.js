import { useRef, useState } from 'react';
import styles from '../styles/Login.module.css';

/**
 * @param {import("./LoginForm").ILoginFormProps} param0
 * @returns
 */
export default function LoginForm({ onSubmit, onFormReplace }) {
  const formRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function submitForm() {
    const loginFormData = new FormData(formRef.current);

    const username = loginFormData.get('username');
    const password = loginFormData.get('password');

    onSubmit(username, password);
  }

  return (
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
            onFormReplace();
          }}
        >
          Нет аккаунта?
        </Button>
        <Button type='submit'>Войти</Button>
      </div>
    </form>
  );
}
