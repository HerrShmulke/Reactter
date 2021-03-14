import Button from '../Button';
import styles from '../../styles/Index.module.css';

export default function AddCommentActions(setValue) {
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
