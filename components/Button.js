import styles from '../styles/Button.module.css';

/**
 *
 * @param {Object} param0
 * @param {import("react").ReactNode} param0.children
 * @param {'fill' | 'text' | 'outline'} param0.type
 * @param {import("react").MouseEvent<HTMLButtonElement, MouseEvent>} param0.onClick
 */
export default function Button({ children, type = 'fill', onClick }) {
  return (
    <button className={`${styles[type]} ${styles.button}`} onClick={onClick}>
      {children}
    </button>
  );
}
