import { gql, useQuery, useSubscription } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts($take: Int!, $skip: Int!) {
    posts(take: $take, skip: $skip) {
      id
      message
      owner {
        name
        avatarUrl
      }
      likesCount
      commentsCount
      isLikes
    }
  }
`;

const SUBSCRIBE_POSTS = gql`
  subscription {
    postAdded {
      id
      message
      owner {
        name
        avatarUrl
      }
      likesCount
      commentsCount
      isLikes
    }
  }
`;

export function useGetPosts(take) {
  const { loading, data, refetch } = useQuery(GET_POSTS, { variables: { skip: 0, take } });
  let iteration = 0;

  function next() {
    refetch({ skip: ++iteration * take, take });
  }

  if (!loading) return { data: data.posts, loading: loading, next };
  return { data: undefined, loading: loading, next };
}

export function useSubscribeToAddNewPosts() {
  const { data, loading } = useSubscription(SUBSCRIBE_POSTS);

  if (!loading) return { data: data.postAdded, loading };
  return { data: undefined, loading };
}
