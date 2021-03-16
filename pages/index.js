import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import HomeContainer from '../containers/Home';
import { useGetPosts, useSubscribeToAddNewPosts, useAddPost, useToggleLikePost } from '../lib/api';
import throttle from '../lib/throttle';
import { IPost } from '../lib/post-api';

export default function Index() {
  const posts = useGetPosts(10);
  const newPost = useSubscribeToAddNewPosts();
  /**
   * @type {[IPost[], Dispatch<SetStateAction<IPost[]>>]}
   */
  const [postPool, setPostPool] = useState([]);
  const addPost = useAddPost();
  const toggleLikePost = useToggleLikePost();

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

  /**
   * @param {number} postId
   */
  async function onLikePost(postId) {
    const awaitLikeStatus = toggleLikePost(postId);

    function toggleLike() {
      setPostPool(
        postPool.map((post) => {
          if (post.id === postId) {
            const newPost = Object.assign({}, post);
            newPost.isLikes = !newPost.isLikes;

            if (newPost.isLikes) ++newPost.likesCount;
            else --newPost.likesCount;

            return newPost;
          }

          return post;
        })
      );
    }

    toggleLike();

    awaitLikeStatus.catch(() => {
      toggleLike();
    });
  }

  return <HomeContainer posts={postPool} postsLoading={posts.loading} onSubmitPost={addPost} onLikePost={onLikePost} />;
}
