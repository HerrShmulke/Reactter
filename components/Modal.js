import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from '../styles/Modal.module.css';

export default function Modal({ children, ActionsComponent, setActive }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.closeModal}>
          <Image
            src='/close-modal.svg'
            width={28}
            height={28}
            alt='Закрыть модальное окно'
            onClick={() => setActive(false)}
          />
        </div>
        <div>{children}</div>
        <div className={styles.actions}>{ActionsComponent ? <ActionsComponent /> : ''}</div>
      </div>
    </div>
  );
}
