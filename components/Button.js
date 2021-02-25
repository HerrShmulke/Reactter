import styles from '../styles/Button.module.css';

/**
 * @param {import('./Button').IButtonProps} param0
 */
export default function Button({ children, type = 'fill', ...props }) {
  return (
    <button className={`${styles[type]} ${styles.button}`} {...props}>
      {children}
    </button>
  );
}
