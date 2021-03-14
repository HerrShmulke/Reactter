import Image from 'next/image';
import Textarea from '../Textarea';
import styles from '../../styles/Index.module.css';

export default function AddComment({ value, setValue, maxLength, authorName, message }) {
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
