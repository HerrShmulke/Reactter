import { gql, useMutation, useQuery } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation login($loginInput: UserLoginInput) {
    userLogin(input: $loginInput)
  }
`;

/**
 * @param {string} username
 * @param {string} password
 */
export function login(username, password) {
  const [_login] = useMutation(LOGIN_MUTATION);

  return _login({
    variables: {
      loginInput: {
        name: username,
        password: password,
      },
    },
  });
}
