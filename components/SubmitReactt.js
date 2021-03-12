import { useEffect, useRef, useState } from 'react';
import Textarea from './Textarea';
import styles from '../styles/SubmitReactt.module.css';
import Button from './Button';
import { gql, useMutation } from '@apollo/client';

const CREATE_POST = gql`
  mutation CreatePost($postInput: PostCreateInput!) {
    postCreate(input: $postInput)
  }
`;

export default function SubmitReactt() {
  const [createPost] = useMutation(CREATE_POST);
  const [postField, setPostField] = useState('');
  const textarea = useRef(null);
  const maxLength = 250;

  async function createPostHandler() {
    const createPostData = await createPost({ variables: { postInput: { message: postField } } });

    setPostField('');
    textarea.current.focus();
  }

  return (
    <div className={styles.card}>
      <Textarea
        value={postField}
        onChange={(event) => setPostField(event.target.value)}
        placeholder='Что случилось?'
        maxLength={maxLength}
        counter
        ref={textarea}
        onKeyDown={(event) => {
          if (event.key.toLowerCase() === 'enter') createPostHandler();
        }}
        CustomFooter={() => <Button onClick={createPostHandler}>Реактнуть</Button>}
      />
    </div>
  );
}
