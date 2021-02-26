import { ChangeEventHandler, Dispatch, FunctionComponent, InputHTMLAttributes, SetStateAction } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
  maxLength: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: IInputProps): FunctionComponent;
