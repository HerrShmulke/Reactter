import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from '../styles/Modal.module.css';
import FocusLock from 'react-focus-lock';

function Footer({ children }) {
  return <div className={styles.actions}>{children}</div>;
}

const Modal = function ({ children, renderActions: Actions, setActive }) {
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
    <FocusLock>
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
              onKeyUp={(event) => event.code.toLowerCase() === 'space' && setActive(false)}
              role='button'
              tabIndex='0'
            />
          </div>
          {children}
        </div>
      </div>
    </FocusLock>
  );
};

Modal.Footer = Footer;

export default Modal;
