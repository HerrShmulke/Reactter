import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const LOGIN_MUTATION = gql`
  mutation login($loginInput: UserLoginInput!) {
    userLogin(input: $loginInput)
  }
`;

export function useLogin() {
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const [authStatus, setAuthStatus] = useState(false);

  async function login(name, password) {
    const authStatusData = await loginMutation({ variables: { loginInput: { name, password } } });

    setAuthStatus(authStatusData.data.userLogin);
  }

  return { isLogin: authStatus, login };
}
