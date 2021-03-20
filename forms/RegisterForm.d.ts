export interface IRegisterFormProps {
  onSubmit: (name: string, password: string, email: string) => void;
  onFormReplace: () => void;
}

export function RegisterForm(props: IRegisterFormProps);
