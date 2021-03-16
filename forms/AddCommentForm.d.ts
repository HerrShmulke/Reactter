import { ITextareaProps } from '../components/Textarea';

export interface IAddCommentFormProps extends ITextareaProps {
  maxLength: number;
  authorName: string;
  message: string;
}

export default function AddCommentForm(props: IAddCommentFormProps);
