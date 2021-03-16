import { gql, useMutation, useQuery, useSubscription } from '@apollo/client';
import { useState } from 'react';

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

let iteration = 1;
let waitPreviousQuery = false;

export function useGetPosts(take) {
  const { loading, data, refetch } = useQuery(GET_POSTS, { variables: { skip: 0, take } });

  async function next() {
    if (!waitPreviousQuery) {
      waitPreviousQuery = true;
      const refetchResult = await refetch({ skip: iteration * take, take });
      waitPreviousQuery = false;

      try {
        if (refetchResult.data.posts.length > 0) ++iteration;
      } catch (e) {
        console.log(refetchResult);
      }
    }
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
