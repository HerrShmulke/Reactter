import styles from '../styles/Button.module.css';
import react from 'react';

/**
 *
 * @param {Object} param0
 * @param {import("react").ReactNode} param0.children
 * @param {'fill' | 'text'} param0.type
 */
export default function Button({ children, type = 'fill' }) {
  return <button className={`${styles[type]} ${styles.button}`}>{children}</button>;
}
