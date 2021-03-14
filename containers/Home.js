import Head from 'next/head';
import { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Modal from '../components/Modal';
import PostCard from '../components/PostCard';
import SubmitReactt from '../components/SubmitReactt';
import AddComment from '../components/Index/AddComment';
import AddCommentActions from '../components/Index/AddCommentActions';
import { getUser } from '../lib/user';
import styles from '../styles/Index.module.css';

export default function HomeContainer({ user, posts, postsLoading }) {
  const [activeModal, setActiveModal] = useState(false);
  const [commentMessage, setCommentMessage] = useState('');
  const [currentPost, setCurrentPost] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Reactter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {activeModal && (
        <Modal setActive={setActiveModal} ActionsComponent={AddCommentActions(setActiveModal)}>
          <AddComment
            value={commentMessage}
            setValue={setCommentMessage}
            maxLength={250}
            authorName={currentPost.authorName}
            message={currentPost.message}
          />
        </Modal>
      )}

      <Container>
        <Header user={user} />
        <SubmitReactt />
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
