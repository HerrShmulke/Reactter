import HeaderUserProfile from './HeaderUserProfile';
import styles from '../../styles/Header.module.css';

/**
 * @param {import(".").IHeaderProps} param0
 */
export default function Header({ user, ...props }) {
  return (
    <header className={styles.header} {...props}>
      <img src='/logo.svg' />
      {user ? <HeaderUserProfile user={user} /> : ''}
    </header>
  );
}
