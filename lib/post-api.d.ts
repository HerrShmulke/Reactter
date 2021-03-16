import { FetchResult } from '@apollo/client';

export interface IUser {
  name: string;
  avatarUrl: string;
}

export interface IPost {
  id: number;
  message: string;
  owner: User;
  likesCount: number;
  commentsCount: number;
  isLikes: boolean;
  mention?: {
    id: number;
    owner: {
      name: string;
    };
  };
}

export interface IPostCreate {
  postCreate: boolean;
}

export interface IPostAddLike {
  postAddLike: 'LIKE' | 'DISLIKE';
}

export function useGetPosts(take: number): { data: IPost[]; loading: boolean; next: () => void };
export function useSubscribeToAddNewPosts(): { data: IPost; loading: boolean };
export function useAddPost(): (
  message: string,
  mention: number
) => Promise<FetchResult<IPostCreate, Record<string, IPostCreate>, Record<string, IPostCreate>>>;
export function useToggleLikePost(): (
  postId: number
) => Promise<FetchResult<IPostAddLike, Record<string, IPostAddLike>, Record<string, IPostAddLike>>>;
