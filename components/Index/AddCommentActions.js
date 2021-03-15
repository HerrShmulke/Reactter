import Button from '../Button';
import styles from '../../styles/Index.module.css';

export default function AddCommentActions({ onCancel, onSubmit }) {
  return (
    <div className={styles.actions}>
      <Button type='outline' onClick={onCancel}>
        Отменить
      </Button>

      <Button onClick={onSubmit}>Отправить</Button>
    </div>
  );
}
