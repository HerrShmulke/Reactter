import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from '../styles/Modal.module.css';

export default function Modal({ children, ActionsComponent, setActive }) {
  /**
   * @type {import('react').MutableRefObject<HTMLDivElement>}
   */
  let modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    modalRef.current.focus();

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalRef]);

  return (
    <div
      className={styles.overlay}
      onKeyUp={(event) => event.code.toLowerCase() === 'escape' && setActive(false)}
      tabIndex='-1'
      style={{ outline: 'none' }}
      ref={modalRef}
    >
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
