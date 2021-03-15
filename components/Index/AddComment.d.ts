import { ITextareaProps } from '../Textarea';

export interface IAddCommentProps extends ITextareaProps {
  maxLength: number;
  authorName: string;
  message: string;
}

export default function AddComment(props: IAddCommentProps);
