import { MouseEventHandler } from 'react';

export interface IAddCommentActionsProps {
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

export default function AddCommentActions(props: IAddCommentActionsProps);
