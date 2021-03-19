import { IPost, IPostAddLike } from '../lib/post-api';

export interface IHomeContainerProps {
  user: any;
  posts: IPost[];
  onSubmitPost: (message: string, mention: number) => void;
  onLikePost: (postId: number) => IPostAddLike;
}

export default function HomeContainer(props: IHomeContainerProps);
