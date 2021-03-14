import { useEffect, useState } from 'react';
import HomeContainer from '../containers/Home';
import { useGetPosts, useSubscribeToAddNewPosts } from '../lib/api';

export default function Index() {
  const posts = useGetPosts(20);
  const newPost = useSubscribeToAddNewPosts();
  const [postPool, setPostPool] = useState([]);

  useEffect(() => {
    if (!posts.loading) {
      setPostPool(() => posts.data);
    }
  }, [posts.data]);

  useEffect(() => {
    if (!newPost.loading) {
      setPostPool((oldArr) => [newPost.data, ...oldArr]);
    }
  }, [newPost.data]);

  return <HomeContainer posts={postPool} postsLoading={posts.loading} />;
}
