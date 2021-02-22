import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import SubmitReactt from '../components/SubmitReactt';
import { getAllPosts } from '../lib/post';
import { getUser } from '../lib/user';
import styles from '../styles/Index.module.css';

export default function Home({ user }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reactter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
