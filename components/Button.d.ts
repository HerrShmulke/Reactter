import { ButtonHTMLAttributes, ReactNode, FunctionComponent } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: 'fill' | 'text' | 'outline';
}

export default function Button(props: IButtonProps): FunctionComponent;
