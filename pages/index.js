import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import Header from '../components/Header';
import Modal from '../components/Modal';
import PostCard from '../components/PostCard';
import SubmitReactt from '../components/SubmitReactt';
import Textarea from '../components/Textarea';
import { getAllPosts } from '../lib/post';
import { getUser } from '../lib/user';
import styles from '../styles/Index.module.css';

function AddComment({ value, setValue, maxLength }) {
  return (
    <div>
      <div className={styles.grid}>
        <div>
          <Image className={styles.avatar} src='/avatar.png' width={48} height={48} />
        </div>
        <div>
          <span className={styles.name}>Tim Cook</span>
          <span className={styles.message}>
            Но укрепление и развитие внутренней структуры позволяет выполнить важные задания по разработке прогресса
            профессионального сообщества.
          </span>
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
  const [activeModal, setActiveModal] = useState(false);
  const [commentMessage, setCommentMessage] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Reactter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {activeModal ? (
        <Modal setActive={setActiveModal} ActionsComponent={AddCommentActions(setActiveModal)}>
          <AddComment value={commentMessage} setValue={setCommentMessage} maxLength={250} />
        </Modal>
      ) : (
        ''
      )}

      <Container>
        <Header user={user} />
        <SubmitReactt />
        <div className={styles.posts}>
          {getAllPosts(0).map((post) => (
            <PostCard
              key={post.id}
              avatarUrl={post.avatarUrl}
              authorName={post.authorName}
              commentsCount={post.commentsCount}
              likesCount={post.likesCount}
              message={post.message}
              isLikes={post.isLikes}
              onCommentClick={() => setActiveModal(true)}
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
