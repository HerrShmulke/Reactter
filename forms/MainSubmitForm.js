import { useEffect, useRef, useState } from 'react';
import Textarea from '../components/Textarea';
import styles from '../styles/MainSubmitForm.module.css';
import Button from '../components/Button';

export default function MainSubmitForm({ onSubmit }) {
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
