import { FunctionComponent, MouseEventHandler, KeyboardEventHandler } from 'react';

export interface IPostCardProps {
  avatarUrl?: string;
  message?: string;
  authorName?: string;
  commentsCount?: number;
  likesCount?: number;
  isLikes?: boolean;
  onLikeClick?: (event: MouseEventHandler<HTMLDivElement> | KeyboardEventHandler<HTMLDivElement>) => void;
  onCommentClick?: (event: MouseEventHandler<HTMLDivElement> | KeyboardEventHandler<HTMLDivElement>) => void;
  onShareClick?: (event: MouseEventHandler<HTMLDivElement> | KeyboardEventHandler<HTMLDivElement>) => void;
}

export default function PostCard(props: IPostCardProps): FunctionComponent;
