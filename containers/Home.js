import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Modal from '../components/Modal/Modal';
import PostCard from '../components/PostCard';
import SubmitReactt from '../components/SubmitReactt';
import AddComment from '../components/Index/AddComment';
import AddCommentActions from '../components/Index/AddCommentActions';
import { getUser } from '../lib/user';
import styles from '../styles/Index.module.css';
import ModalFooter from '../components/Modal/ModalFooter';
import { IPost } from '../lib/post-api';

/**
 * @param {import('./Home').IHomeContainerProps} param0
 */
export default function HomeContainer({ user, posts, postsLoading, onSubmitPost }) {
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
          <AddComment
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
          <ModalFooter>
            <AddCommentActions onCancel={() => setActiveModal(false)} onSubmit={postSubmit} />
          </ModalFooter>
        </Modal>
      )}

      <Container>
        <Header user={user} />
        <SubmitReactt onSubmit={onSubmitPost} />
        <div className={styles.posts}>
          {!postsLoading &&
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
