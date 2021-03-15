import { gql, useMutation, useQuery, useSubscription } from '@apollo/client';

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
      mention {
        id
        owner {
          name
        }
      }
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

const CREATE_POST = gql`
  mutation CreatePost($postInput: PostCreateInput!) {
    postCreate(input: $postInput)
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

export function useAddPost() {
  const [createPost] = useMutation(CREATE_POST);

  return function (message, mention) {
    const postInput = { message };
    if (mention) postInput.mention = mention;

    return createPost({ variables: { postInput } });
  };
}
