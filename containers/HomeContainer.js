import Head from 'next/head';
import { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Modal from '../components/Modal';
import PostCard from '../components/PostCard';
import MainSubmitForm from '../forms/MainSubmitForm';
import AddCommentForm from '../forms/AddCommentForm';
import AddCommentActions from '../components/Index/AddCommentActions';
import { getUser } from '../lib/user';
import styles from '../styles/Index.module.css';
import { IPost } from '../lib/post-api';

/**
 * @param {import('./HomeContainer').IHomeContainerProps} param0
 */
export default function HomeContainer({ user, posts, onSubmitPost, onLikePost }) {
  const [activeModal, setActiveModal] = useState(false);
  const [commentMessage, setCommentMessage] = useState('');

  /**
   * @type {[IPost, import('react').Dispatch<IPost>]}
   */
  const [currentPost, setCurrentPost] = useState(null);

  function postSubmit() {
    onSubmitPost(commentMessage, currentPost.id);
    setCommentMessage('');
    setActiveModal(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Reactter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {activeModal && (
        <Modal setActive={setActiveModal}>
          <AddCommentForm
            value={commentMessage}
            onChange={(event) => setCommentMessage(event.target.value)}
            maxLength={250}
            authorName={currentPost.authorName}
            message={currentPost.message}
            onKeyDown={(event) => {
              if (event.key.toLowerCase() === 'enter') {
                postSubmit();
              }
            }}
          />
          <Modal.Footer>
            <AddCommentActions onCancel={() => setActiveModal(false)} onSubmit={postSubmit} />
          </Modal.Footer>
        </Modal>
      )}

      <Container>
        <Header user={user} />
        <MainSubmitForm onSubmit={onSubmitPost} />
        <div className={styles.posts}>
          {posts.length > 0 &&
            posts.map((post) => (
              <PostCard
                key={post.id}
                avatarUrl={post.owner.avatarUrl}
                authorName={post.owner.name}
                commentsCount={post.commentsCount}
                likesCount={post.likesCount}
                message={post.message}
                isLikes={post.isLikes}
                mentionName={post.mention ? post.mention.owner.name : undefined}
                onCommentClick={() => {
                  setActiveModal(true);
                  setCurrentPost(post);
                }}
                onLikeClick={() => onLikePost(post.id)}
              />
            ))}
        </div>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const user = getUser();

  return {
    props: {
      user,
    },
  };
}
