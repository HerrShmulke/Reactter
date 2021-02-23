import { useEffect, useState } from 'react';
import Textarea from './Textarea';
import styles from '../styles/SubmitReactt.module.css';
import Button from './Button';

export default function SubmitReactt() {
  const [postField, setPostField] = useState('');
  const maxLength = 250;

  return (
    <div className={styles.card}>
      <Textarea
        value={postField}
        setValue={setPostField}
        placeholder='Что случилось?'
        maxLength={maxLength}
        counter
        CustomFooter={() => <Button>Реактнуть</Button>}
      />
    </div>
  );
}
