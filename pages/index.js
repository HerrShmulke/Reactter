import { useEffect, useState } from 'react';
import HomeContainer from '../containers/Home';
import { useGetPosts, useSubscribeToAddNewPosts, useAddPost } from '../lib/api';
import debounce from '../lib/debounce';
import throttle from '../lib/throttle';

export default function Index() {
  const posts = useGetPosts(10);
  const newPost = useSubscribeToAddNewPosts();
  const [postPool, setPostPool] = useState([]);
  const addPost = useAddPost();

  const throttleNextHandler = throttle(posts.next, 8000);

  if (process.browser) {
    window.addEventListener('scroll', () => {
      if (document.body.clientHeight - window.innerHeight - 400 < window.scrollY && !posts.loading) {
        throttleNextHandler();
      }
    });
  }

  useEffect(() => {
    if (!posts.loading && postPool.length === 0) {
      setPostPool(() => posts.data);
    } else if (!posts.loading) {
      setPostPool((oldArr) => [...oldArr, ...posts.data]);
    }
  }, [posts.data]);

  useEffect(() => {
    if (!newPost.loading) {
      setPostPool((oldArr) => [newPost.data, ...oldArr]);
    }
  }, [newPost.data]);

  return <HomeContainer posts={postPool} postsLoading={posts.loading} onSubmitPost={addPost} />;
}
