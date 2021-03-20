import { useRef, useState } from 'react';
import styles from '../styles/Login.module.css';
import Input from '../components/Input';
import Button from '../components/Button';

/**
 * @param {import('./RegisterForm').IRegisterFormProps} param0
 */
export default function RegisterForm({ onSubmit, onFormReplace }) {
  /**
   * @type {import('react').MutableRefObject<HTMLFormElement>}
   */
  const formRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit() {
    const loginFormData = new FormData(formRef.current);

    const username = loginFormData.get('username');
    const password = loginFormData.get('password');
    const email = loginFormData.get('email');

    formRef.current.reportValidity();

    if (formRef.current.checkValidity()) onSubmit(username, password, email);
  }

  return (
    <form
      className={styles.card}
      ref={formRef}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
      onKeyPress={(event) => {
        if (event.key.toLowerCase() === 'enter') {
          event.target.value = event.target.value.trim();
          handleSubmit();
        }
      }}
    >
      <Input
        label='Username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder='Ivan14'
        maxLength={30}
        name='username'
        minLength='4'
        title='Допускаются латинские буквы и цифры'
        pattern='\w*\d*'
        required
      />
      <Input
        label='Email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='example@mail.com'
        maxLength={150}
        name='email'
        type='email'
        required
      />
      <Input
        label='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Надежный пароль'
        type='password'
        name='password'
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
          Есть аккаунт?
        </Button>
        <Button>Продолжить</Button>
      </div>
    </form>
  );
}
