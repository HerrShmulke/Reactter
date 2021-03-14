import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import LoginContainer from '../containers/Login';
import { useLogin } from '../lib/api';

export default function Login() {
  const router = useRouter();
  const loginData = useLogin();

  useEffect(() => {
    if (loginData.isLogin) router.push('/');
  }, [loginData.isLogin]);

  return <LoginContainer onLogin={(username, password) => loginData.login(username, password)} />;
}
