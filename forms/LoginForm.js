import { useRef, useState } from 'react';
import styles from '../styles/Login.module.css';
import Input from '../components/Input';
import Button from '../components/Button';

/**
 * @param {import("./LoginForm").ILoginFormProps} param0
 * @returns
 */
export default function LoginForm({ onSubmit, onFormReplace }) {
  /**
   * @type {import('react').MutableRefObject<HTMLFormElement>}
   */
  const formRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    const loginFormData = new FormData(formRef.current);

    const username = loginFormData.get('username');
    const password = loginFormData.get('password');

    formRef.current.reportValidity();

    if (formRef.current.checkValidity()) onSubmit(username, password);
  }

  return (
    <form
      className={styles.card}
      ref={formRef}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        label='Username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder='Введите имя'
        maxLength={30}
        name='username'
        onKeyPress={(event) => {
          if (event.key.toLowerCase() === 'enter') {
            event.target.value = event.target.value.trim();
            handleSubmit();
          }
        }}
        pattern='\w*\d*'
        required
      />
      <Input
        label='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Введите пароль'
        type='password'
        name='password'
        onKeyPress={(event) => {
          if (event.key.toLowerCase() === 'enter') handleSubmit();
        }}
        required
      />
      <div className={styles.actions}>
        <Button
          appearanceType='text'
          type='button'
          onClick={(event) => {
            event.preventDefault();
            onFormReplace();
          }}
        >
          Нет аккаунта?
        </Button>
        <Button>Войти</Button>
      </div>
    </form>
  );
}
