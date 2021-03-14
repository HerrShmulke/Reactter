import { useEffect, useState } from 'react';
import Home from '../containers/Home';
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

  return <Home posts={postPool} postsLoading={posts.loading} />;
}
