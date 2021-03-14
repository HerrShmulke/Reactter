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
}

export function useGetPosts(take: number): { data: IPost[]; loading: boolean; next: () => void };
export function useSubscribeToAddNewPosts(): { data: IPost; loading: boolean };
