import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import LoginContainer from '../containers/LoginContainer';
import { useLogin } from '../lib/api';
import { useRegister } from '../lib/auth-api';

export default function Login() {
  const router = useRouter();
  const loginData = useLogin();
  const registerData = useRegister();

  useEffect(() => {
    if (loginData.isLogin) router.push('/');
  }, [loginData.isLogin]);

  useEffect(() => {
    if (registerData.error) {
      console.error(registerData.error);
    }
  }, [registerData.error]);

  return (
    <LoginContainer
      onLogin={(username, password) => loginData.login(username, password)}
      onRegister={(username, password, email) => registerData.register(username, password, email)}
    />
  );
}
