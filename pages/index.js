import { gql, useQuery, useSubscription } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import Header from '../components/Header';
import Modal from '../components/Modal';
import PostCard from '../components/PostCard';
import SubmitReactt from '../components/SubmitReactt';
import Textarea from '../components/Textarea';
import { getUser } from '../lib/user';
import styles from '../styles/Index.module.css';

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

const POSTS_SUBSCRIPTION = gql`
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

function AddComment({ value, setValue, maxLength, authorName, message }) {
  return (
    <div>
      <div className={styles.grid}>
        <div>
          <Image className={styles.avatar} src='/avatar.png' width={48} height={48} />
        </div>
        <div>
          <span className={styles.name}>{authorName}</span>
          <span className={styles.message}>{message}</span>
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <Image className={styles.avatar} src='/avatar.png' width={48} height={48} />
        </div>

        <div>
          <Textarea
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder='Что думаете?'
            maxLength={maxLength}
            counter
          />
        </div>
      </div>
    </div>
  );
}

function AddCommentActions(setValue) {
  return function () {
    return (
      <div className={styles.actions}>
        <Button type='outline' onClick={() => setValue(false)}>
          Отменить
        </Button>
        <Button>Отправить</Button>
      </div>
    );
  };
}

export default function Home({ user }) {
  const { loading: postsLoading, data: posts } = useQuery(GET_POSTS, { variables: { skip: 0, take: 10 } });
  const [activeModal, setActiveModal] = useState(false);
  const [commentMessage, setCommentMessage] = useState('');
  const [currentPost, setCurrentPost] = useState(null);
  const [postPool, setPostPool] = useState([]);
  const { data: subPost, loading: subPostLoading } = useSubscription(POSTS_SUBSCRIPTION);

  useEffect(() => {
    if (!postsLoading) {
      setPostPool((oldArr) => [...posts.posts]);
    }
  }, [posts]);

  useEffect(() => {
    if (!subPostLoading) {
      setPostPool((oldArr) => [subPost.postAdded, ...oldArr]);
    }
  }, [subPost]);

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
          {postPool.map((post) => (
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
