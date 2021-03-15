import styles from '../../styles/Modal.module.css';

export default function ModalFooter({ children }) {
  return <div className={styles.actions}>{children}</div>;
}
