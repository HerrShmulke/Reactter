import { IPost } from '../lib/post-api';

export interface IHomeContainerProps {
  user: any;
  posts: IPost[];
  postsLoading: boolean;
  onSubmitPost: (message: string, mention: number) => void;
}

export default function HomeContainer(props: IHomeContainerProps);
