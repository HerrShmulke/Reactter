import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const LOGIN_USER = gql`
  mutation login($loginInput: UserLoginInput!) {
    userLogin(input: $loginInput)
  }
`;

const REGISTER_USER = gql`
  mutation RegisterUser($registerInput: UserRegisterInput!) {
    userRegister(input: $registerInput)
  }
`;

export function useLogin() {
  const [loginMutation] = useMutation(LOGIN_USER);
  const [authStatus, setAuthStatus] = useState(false);

  async function login(name, password) {
    const authStatusData = await loginMutation({ variables: { loginInput: { name, password } } });

    setAuthStatus(authStatusData.data.userLogin);
  }

  return { isLogin: authStatus, login };
}

export function useRegister() {
  const [registerMutation] = useMutation(REGISTER_USER);
  const [registerStatus, setRegisterStatus] = useState(false);
  const [error, setError] = useState(null);

  function register(name, password, email) {
    registerMutation({ variables: { registerInput: { name, password, email } } })
      .then((registerStatusData) => {
        setRegisterStatus(registerStatusData.data.userRegister);
      })
      .catch((e) => {
        setError(e.message);
      });
  }

  return { isRegister: registerStatus, register, error };
}
