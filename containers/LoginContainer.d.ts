interface ILoginContainerProps {
  onLogin: (username: string, password: string) => void;
  onRegister: (username: string, password: string, email: string) => void;
}

export default function LoginContainer(props: ILoginContainerProps);
