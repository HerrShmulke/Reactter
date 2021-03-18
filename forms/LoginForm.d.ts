import { Dispatch, SetStateAction } from 'react';

export interface ILoginFormProps {
  onSubmit: (username: string, password: string) => void;
  onFormReplace: () => void;
}

export default function LoginForm(props: ILoginFormProps);
