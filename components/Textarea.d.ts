import { ChangeEventHandler, FunctionComponent, TextareaHTMLAttributes } from 'react';

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  maxLength?: number;
  counter?: boolean;
  CustomFooter?: FunctionComponent;
}

export default function Textarea(props: ITextareaProps): FunctionComponent;
