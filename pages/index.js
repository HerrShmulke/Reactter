import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import SubmitReactt from '../components/SubmitReactt';
import { getAllPosts } from '../lib/post';
import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reactter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Header />
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
