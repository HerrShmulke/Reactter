import { useEffect, useRef, useState } from 'react';
import Textarea from './Textarea';
import styles from '../styles/SubmitReactt.module.css';
import Button from './Button';

export default function SubmitReactt({ onSubmit }) {
  const [postField, setPostField] = useState('');
  const textarea = useRef(null);
  const maxLength = 250;

  async function createPostHandler() {
    setPostField('');
    textarea.current.focus();
    onSubmit(postField);
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
