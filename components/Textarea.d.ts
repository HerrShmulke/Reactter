import { Dispatch, FunctionComponent, SetStateAction, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  maxLength: number;
  counter: boolean;
  CustomFooter: FunctionComponent;
}
