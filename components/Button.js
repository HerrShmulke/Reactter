import styles from '../styles/Button.module.css';

/**
 * @param {import('./Button').IButtonProps} param0
 */
export default function Button({ children, appearanceType = 'fill', ...props }) {
  return (
    <button className={`${styles[appearanceType]} ${styles.button}`} {...props}>
      {children}
    </button>
  );
}
